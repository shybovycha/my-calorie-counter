import React, { useCallback, useRef } from 'react';

import { format as formatDate } from 'date-fns';

import { useNutritionContext } from '../../contexts/nutritionContext';

export default () => {
    const { recordNutrition } = useNutritionContext();

    const nameRef = useRef(null);
    const energyRef = useRef(null);

    const saveChanges = useCallback((evt) => {
        evt.preventDefault();

        recordNutrition({
            energy: parseInt(energyRef.current.value) ?? 0,
            name: nameRef.current.value,
            date: formatDate(new Date(), 'dd/MM/yyyy'),
        });
    }, [energyRef, nameRef, recordNutrition]);

    return (
        <form onSubmit={saveChanges}>
            <div className="row">
                <label htmlFor="name">Meal:</label>
                {/* TODO: consider using select / autocomplete instead */}
                <input id="name" ref={nameRef} />
            </div>

            <div className="row">
                <label htmlFor="energy">Energy consumed:</label>
                <input type="number" id="energy" ref={energyRef} defaultValue={0} />
            </div>

            <div className="row">
                <button onClick={saveChanges}>Save</button>
            </div>
        </form>
    );
};
