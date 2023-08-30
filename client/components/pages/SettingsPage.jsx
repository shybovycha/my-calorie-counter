import React, { useCallback, useRef } from 'react';

import { format as formatDate, parse as parseDate } from 'date-fns';

import { useGeneralInformationContext } from '../../contexts/generalInformationContext';

export default () => {
    const { generalInformation, updateGeneralInformation } = useGeneralInformationContext();

    const { gender, height, exerciseLevel, dateOfBirth } = generalInformation;

    const formRef = useRef(null);

    const saveChanges = useCallback((evt) => {
        evt.preventDefault();

        const formData = new FormData(formRef.current);

        updateGeneralInformation({
            height: parseInt(formData.get('height')) ?? 0,
            gender: formData.get('gender'),
            exerciseLevel: parseInt(formData.get('exerciseLevel')),
            dateOfBirth: formatDate(parseDate(formData.get('dateOfBirth'), 'yyyy-MM-dd', new Date()), 'dd/MM/yyyy'),
        });
    }, [formRef, updateGeneralInformation]);

    return (
        <form onSubmit={saveChanges} ref={formRef}>
            <div className="row">
                <label htmlFor="height">Height (cm):</label>
                <input type="number" id="height" name="height" defaultValue={height} />
            </div>

            <div className="row">
                <label htmlFor="dateOfBirth">Date of birth:</label>
                <input type="date" id="dateOfBirth" name="dateOfBirth" defaultValue={parseDate(dateOfBirth, 'dd/MM/yyyy', new Date()).toLocaleDateString('en-CA')} />
            </div>

            <div className="row">
                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender" defaultValue={gender}>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                </select>
            </div>

            <div className="row">
                <label htmlFor="exercise-level">Fitness level:</label>
                <select id="exercise-level" name="exerciseLevel" defaultValue={exerciseLevel}>
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
