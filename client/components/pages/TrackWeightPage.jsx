import React, { useCallback, useRef } from 'react';

import { format as formatDate } from 'date-fns';

import { useMeasurementsContext } from '../../contexts/measurementsContext';

export default () => {
    const { recordWeight } = useMeasurementsContext();

    const formRef = useRef(null);

    const saveChanges = useCallback((evt) => {
        evt.preventDefault();

        const formData = new FormData(formRef.current);

        recordWeight({
            weight: parseInt(formData.get('weight')) ?? 0,
            date: formatDate(new Date(), 'dd/MM/yyyy'),
        });
    }, [formRef, recordWeight]);

    return (
        <form onSubmit={saveChanges} ref={formRef}>
            <div className="row">
                <label htmlFor="weight">Weight:</label>
                {/* TODO: consider using select / autocomplete instead */}
                <input id="weight" name="weight" type="number" />
            </div>

            <div className="row">
                <button onClick={saveChanges}>Save</button>
            </div>
        </form>
    );
};
