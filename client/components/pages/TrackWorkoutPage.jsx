import React, { useCallback, useRef } from 'react';

import { format as formatDate } from 'date-fns';

import { useExerciseContext } from '../../contexts/exerciseContext';

export default () => {
    const { recordExercise } = useExerciseContext();

    const formRef = useRef(null);

    const saveChanges = useCallback((evt) => {
        evt.preventDefault();

        const formData = new FormData(formRef.current);

        recordExercise({
            energy: parseInt(formData.get('energy')) ?? 0,
            name: formData.get('name'),
            date: formatDate(new Date(), 'dd/MM/yyyy'),
        });
    }, [formRef, recordExercise]);

    return (
        <form onSubmit={saveChanges} ref={formRef}>
            <div className="row">
                <label htmlFor="name">Exercise:</label>
                {/* TODO: consider using select / autocomplete instead */}
                <input id="name" name="name" />
            </div>

            <div className="row">
                <label htmlFor="energy">Energy burned:</label>
                <input type="number" id="energy" name="energy" defaultValue={0} />
            </div>

            <div className="row">
                <button onClick={saveChanges}>Save</button>
            </div>
        </form>
    );
};
