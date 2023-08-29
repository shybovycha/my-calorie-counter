import React, { useCallback, useRef } from 'react';

import { format as formatDate, parse as parseDate } from 'date-fns';

import { useGeneralInformationContext } from '../../contexts/generalInformationContext';

export default () => {
    const { generalInformation, updateGeneralInformation } = useGeneralInformationContext();

    const { gender, height, exerciseLevel, dateOfBirth } = generalInformation;

    const heightRef = useRef(null);
    const genderRef = useRef(null);
    const dateOfBirthRef = useRef(null);
    const exerciseLevelRef = useRef(null);

    const saveChanges = useCallback((evt) => {
        evt.preventDefault();

        updateGeneralInformation({
            height: parseInt(heightRef.current.value) ?? 0,
            gender: genderRef.current.value,
            exerciseLevel: parseInt(exerciseLevelRef.current.value),
            dateOfBirth: formatDate(parseDate(dateOfBirthRef.current.value, 'yyyy-MM-dd', new Date()), 'dd/MM/yyyy'),
        });
    }, [heightRef, genderRef, dateOfBirthRef, exerciseLevelRef, updateGeneralInformation]);

    return (
        <form onSubmit={saveChanges}>
            <div className="row">
                <label htmlFor="height">Height (cm):</label>
                <input type="number" id="height" ref={heightRef} defaultValue={height} />
            </div>

            <div className="row">
                <label htmlFor="dob">Date of birth:</label>
                <input type="date" id="dob" ref={dateOfBirthRef} defaultValue={parseDate(dateOfBirth, 'dd/MM/yyyy', new Date()).toLocaleDateString('en-CA')} />
            </div>

            <div className="row">
                <label htmlFor="gender">Gender:</label>
                <select id="gender" ref={genderRef} defaultValue={gender}>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                </select>
            </div>

            <div className="row">
                <label htmlFor="exercise-level">Fitness level:</label>
                <select id="exercise-level" defaultValue={exerciseLevel} ref={exerciseLevelRef}>
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
