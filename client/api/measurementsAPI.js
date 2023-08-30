export const fetchMeasurements = () =>
    fetch(`${API_BASE_URL}/measurements`, { headers: { 'Content-Type': 'application/json' } })
        .then(response => response.json());

export const storeMeasurement = (data) =>
    fetch(`${API_BASE_URL}/measurements`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });