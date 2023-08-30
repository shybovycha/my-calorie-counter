export const fetchNutritionRecords = () =>
    fetch('/nutrition', { headers: { 'Content-Type': 'application/json' } })
        .then(response => response.json());

export const storeNutritionRecord = (record) =>
    fetch('/nutrition', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(record) });
