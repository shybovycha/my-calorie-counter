import React, { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState } from 'react';

const initialValue = {
    gender: 'MALE',
    height: 160,
    dateOfBirth: new Date(),
    exerciseLevel: 1,
};

const GeneralInformationContext = createContext(initialValue);

export const useGeneralInformationContext = () => useContext(GeneralInformationContext);

export const GeneralInformationProvider = ({ children }) => {
    const [generalInformation, setGeneralInformation] = useState(initialValue);

    useLayoutEffect(() => {
        fetch('/general-information', { headers: { 'Content-Type': 'application/json' } })
            .then(response => response.json())
            .then(data => setGeneralInformation(data));
    }, []);

    const updateGeneralInformation = useCallback(({ gender, height, dateOfBirth, exerciseLevel }) => {
        const record = { gender, height, dateOfBirth, exerciseLevel };

        setGeneralInformation(record);

        fetch('/general-information', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(record) });
    }, [generalInformation, setGeneralInformation]);

    const contextValue = useMemo(() => ({
        generalInformation,
        updateGeneralInformation,
    }), [generalInformation, updateGeneralInformation]);

    return (
        <GeneralInformationContext.Provider value={contextValue}>
            {children}
        </GeneralInformationContext.Provider>
    );
};
