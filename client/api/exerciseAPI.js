export const fetchExerciseRecords = () =>
    fetch('/exercise', { headers: { 'Content-Type': 'application/json' } })
        .then(response => response.json());

export const storeExerciseRecord = (record) =>
    fetch('/exercise', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(record) });
