export const fetchMeasurements = () =>
    fetch('/measurements', { headers: { 'Content-Type': 'application/json' } })
        .then(response => response.json());

export const storeMeasurement = (data) =>
    fetch('/measurements', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });