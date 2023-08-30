export const fetchGeneralInformation = () =>
    fetch('/general-information', { headers: { 'Content-Type': 'application/json' } })
        .then(response => response.json());

export const storeGeneralInformation = (data) =>
    fetch('/general-information', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
