import { createSelector } from 'reselect';

import { differenceInYears } from 'date-fns/difference_in_years';
import { parse } from 'date-fns/parse';
import { isAfter } from 'date-fns/is_after';
import { isBefore } from 'date-fns/is_before';
import { startOfDay } from 'date-fns/start_of_day';
import { endOfDay } from 'date-fns/end_of_day';

const getDailyBalance = ({ settings, weightData }) => {
  const {
    dateOfBirth, gender, height, excerciseLevel,
  } = settings;

  const lastWeight = weightData.length > 0 ? weightData[weightData.length - 1].weight : 0;
  const age = differenceInYears(new Date(), parse(dateOfBirth));

  const BMR = {
    MALE: (66.47 + (13.75 * lastWeight) + (5.0 * height)) - (6.75 * age),
    FEMALE: (665.09 + (9.56 * lastWeight) + (1.84 * height)) - (4.67 * age),
  }[gender];

  const EXCERCISE_LEVEL_COEFFICIENT = {
    0: 1.2,
    1: 1.375,
    2: 1.55,
    3: 1.725,
    4: 1.9,
  }[excerciseLevel];

  return parseInt(BMR * EXCERCISE_LEVEL_COEFFICIENT, 10);
};

const getTodayItems = state => state.items
  .filter((e) => {
    const createdAt = parse(e.createdAt);
    const today = new Date();
    const startOfToday = startOfDay(today);
    const endOfToday = endOfDay(today);

    return isAfter(createdAt, startOfToday) && isBefore(createdAt, endOfToday);
  });

const getTodayBalance = state => getDailyBalance(state);

export default createSelector(
  [getTodayItems, getTodayBalance],
  (items, balance) =>
    items.reduce((acc, e) => acc + ({ NUTRITION: -1, WORKOUT: 1 }[e.type] * e.calories), balance),
);
