import React, { useCallback, useRef } from 'react';

import { format as formatDate } from 'date-fns';

import { useMeasurementsContext } from '../../contexts/measurementsContext';

export default () => {
    const { recordWeight } = useMeasurementsContext();

    const weightRef = useRef(null);

    const saveChanges = useCallback((evt) => {
        evt.preventDefault();

        recordWeight({
            weight: parseInt(weightRef.current.value) ?? 0,
            date: formatDate(new Date(), 'dd/MM/yyyy'),
        });
    }, [weightRef, recordWeight]);

    return (
        <form onSubmit={saveChanges}>
            <div className="row">
                <label htmlFor="weight">Weight:</label>
                {/* TODO: consider using select / autocomplete instead */}
                <input id="weight" type="number" ref={weightRef} />
            </div>

            <div className="row">
                <button onClick={saveChanges}>Save</button>
            </div>
        </form>
    );
};
