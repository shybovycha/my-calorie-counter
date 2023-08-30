import React, { useCallback, useRef } from 'react';

import { format as formatDate } from 'date-fns';

import { useNutritionContext } from '../../contexts/nutritionContext';

export default () => {
    const { recordNutrition } = useNutritionContext();

    const formRef = useRef(null);

    const saveChanges = useCallback((evt) => {
        evt.preventDefault();

        const formData = new FormData(formRef.current);

        recordNutrition({
            energy: parseInt(formData.get('energy')) ?? 0,
            name: formData.get('name'),
            date: formatDate(new Date(), 'dd/MM/yyyy'),
        });
    }, [formRef, recordNutrition]);

    return (
        <form onSubmit={saveChanges} ref={formRef}>
            <div className="row">
                <label htmlFor="name">Meal:</label>
                {/* TODO: consider using select / autocomplete instead */}
                <input id="name" name="name" />
            </div>

            <div className="row">
                <label htmlFor="energy">Energy consumed:</label>
                <input type="number" id="energy" name="energy" defaultValue={0} />
            </div>

            <div className="row">
                <button onClick={saveChanges}>Save</button>
            </div>
        </form>
    );
};
