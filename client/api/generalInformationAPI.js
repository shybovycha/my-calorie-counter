export const fetchGeneralInformation = () =>
    fetch(`${API_BASE_URL}/general-information`, { headers: { 'Content-Type': 'application/json' } })
        .then(response => response.json());

export const storeGeneralInformation = (data) =>
    fetch(`${API_BASE_URL}/general-information`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
