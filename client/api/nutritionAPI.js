export const fetchNutritionRecords = () =>
    fetch(`${API_BASE_URL}/nutrition`, { headers: { 'Content-Type': 'application/json' } })
        .then(response => response.json());

export const storeNutritionRecord = (record) =>
    fetch(`${API_BASE_URL}/nutrition`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(record) });
