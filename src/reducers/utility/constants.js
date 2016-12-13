export const ACTION = {
  ADD_NUTRITION: 'ADD_NUTRITION',
  ADD_WORKOUT: 'ADD_WORKOUT',
  TRACK_WEIGHT: 'TRACK_WEIGHT',
  UPDATE_SETTINGS: 'UPDATE_SETTINGS',
};

export const initialState = {
  items: [],
  weightData: [],
  settings: {
    dateOfBirth: '1992-06-21',
    gender: 'MALE',
    height: 178,
    excerciseLevel: 1
  }
};
