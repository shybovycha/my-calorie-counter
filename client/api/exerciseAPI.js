export const fetchExerciseRecords = () =>
    fetch(`${API_BASE_URL}/exercise`, { headers: { 'Content-Type': 'application/json' } })
        .then(response => response.json());

export const storeExerciseRecord = (record) =>
    fetch(`${API_BASE_URL}/exercise`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(record) });
