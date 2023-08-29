import React, { useCallback, useLayoutEffect, useState } from 'react';

import { format as formatDate, parse as parseDate } from 'date-fns';

import { useGeneralInformationContext } from '../../contexts/generalInformationContext';

export default () => {
    const { generalInformation, updateGeneralInformation } = useGeneralInformationContext();

    const [height, setHeight] = useState(generalInformation.height);
    const [dateOfBirth, setDateOfBirth] = useState(generalInformation.dateOfBirth);
    const [gender, setGender] = useState(generalInformation.gender);
    const [exerciseLevel, setExerciseLevel] = useState(generalInformation.exerciseLevel);

    useLayoutEffect(() => {
        setHeight(generalInformation.height);
        setDateOfBirth(generalInformation.dateOfBirth);
        setGender(generalInformation.gender);
        setExerciseLevel(generalInformation.exerciseLevel);
    }, [generalInformation]);

    const saveChanges = useCallback((evt) => {
        evt.preventDefault();

        updateGeneralInformation({
            height: parseInt(height) ?? 0,
            gender: gender,
            exerciseLevel: parseInt(exerciseLevel),
            dateOfBirth: formatDate(parseDate(dateOfBirth, 'yyyy-MM-dd', new Date()), 'dd/MM/yyyy'),
        });
    }, [height, gender, dateOfBirth, exerciseLevel, updateGeneralInformation]);

    return (
        <form onSubmit={saveChanges}>
            <div className="row">
                <label htmlFor="height">Height (cm):</label>
                <input type="number" id="height" value={height} onChange={(evt) => setHeight(parseInt(evt.target.value))} />
            </div>

            <div className="row">
                <label htmlFor="dob">Date of birth:</label>
                <input type="date" id="dob" value={parseDate(dateOfBirth, 'dd/MM/yyyy', new Date()).toLocaleDateString('en-CA')} onChange={(evt) => setDateOfBirth(formatDate(parseDate(dateOfBirth, 'yyyy-MM-dd', new Date())), 'dd/MM/yyyy')} />
            </div>

            <div className="row">
                <label htmlFor="gender">Gender:</label>
                <select id="gender" value={gender} onChange={(evt) => setGender(evt.target.value)}>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                </select>
            </div>

            <div className="row">
                <label htmlFor="exercise-level">Fitness level:</label>
                <select id="exercise-level" value={exerciseLevel} onChange={(evt) => setExerciseLevel(parseInt(evt.target.value))}>
                    <option value={0}>No exercise</option>
                    <option value={1}>Occasionally (once a week or less)</option>
                    <option value={2}>Sometimes (once or twice a week)</option>
                    <option value={3}>Frequently (3+ times a week)</option>
                    <option value={4}>Athlete (5+ days a week)</option>
                </select>
            </div>

            <div className="row">
                <button onClick={saveChanges}>Save</button>
            </div>
        </form>
    );
};
