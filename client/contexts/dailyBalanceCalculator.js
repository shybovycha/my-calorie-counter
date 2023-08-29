import { differenceInYears, parse } from 'date-fns'

export const getDailyCalorieBalance = ({ dateOfBirth, gender, height, exerciseLevel, weightRecords }) => {
  const lastWeight = weightRecords && weightRecords.length > 0 ? weightRecords[weightRecords.length - 1].weight : 0;
  const dob = parse(dateOfBirth, 'dd/MM/yyyy', new Date());
  const age = differenceInYears(new Date(), dob);

  const BMR = {
    MALE: (66.47 + (13.75 * lastWeight) + (5.0 * height)) - (6.75 * age),
    FEMALE: (665.09 + (9.56 * lastWeight) + (1.84 * height)) - (4.67 * age),
  }[gender];

  const EXERCISE_LEVEL_COEFFICIENT = {
    0: 1.2,
    1: 1.375,
    2: 1.55,
    3: 1.725,
    4: 1.9,
  }[exerciseLevel];

  return parseInt(BMR * EXERCISE_LEVEL_COEFFICIENT, 10);
};
