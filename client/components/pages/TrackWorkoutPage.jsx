import React, { useCallback, useRef } from 'react';

import { format as formatDate } from 'date-fns';

import { useExerciseContext } from '../../contexts/exerciseContext';

export default () => {
    const { recordExercise } = useExerciseContext();

    const nameRef = useRef(null);
    const energyRef = useRef(null);

    const saveChanges = useCallback((evt) => {
        evt.preventDefault();

        recordExercise({
            energy: parseInt(energyRef.current.value) ?? 0,
            name: nameRef.current.value,
            date: formatDate(new Date(), 'dd/MM/yyyy'),
        });
    }, [energyRef, nameRef, recordExercise]);

    return (
        <form onSubmit={saveChanges}>
            <div className="row">
                <label htmlFor="name">Exercise:</label>
                {/* TODO: consider using select / autocomplete instead */}
                <input id="name" ref={nameRef} />
            </div>

            <div className="row">
                <label htmlFor="energy">Energy burned:</label>
                <input type="number" id="energy" ref={energyRef} defaultValue={0} />
            </div>

            <div className="row">
                <button onClick={saveChanges}>Save</button>
            </div>
        </form>
    );
};
