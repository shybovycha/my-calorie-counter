import React, { createContext, useCallback, useContext, useLayoutEffect, useState } from 'react';

import { useLoadingStateContext } from './loadingStateContext';

const initialValue = {
    gender: 'MALE',
    height: 160,
    dateOfBirth: '01/01/2000',
    exerciseLevel: 1,
};

const GeneralInformationContext = createContext(initialValue);

export const useGeneralInformationContext = () => useContext(GeneralInformationContext);

export const GeneralInformationProvider = ({ children }) => {
    const { componentStartedLoading, componentFinishedLoading } = useLoadingStateContext();

    const [generalInformation, setGeneralInformation] = useState(initialValue);

    useLayoutEffect(() => {
        const componentName = 'GeneralInformation';

        componentStartedLoading(componentName);

        fetch('/general-information', { headers: { 'Content-Type': 'application/json' } })
            .then(response => response.json())
            .then(data => setGeneralInformation(data))
            .then(() => componentFinishedLoading(componentName));
    }, []);

    const updateGeneralInformation = useCallback(({ gender, height, dateOfBirth, exerciseLevel }) => {
        const record = { gender, height, dateOfBirth, exerciseLevel };

        setGeneralInformation(record);

        fetch('/general-information', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(record) });
    }, [generalInformation, setGeneralInformation]);

    const contextValue = {
        generalInformation,
        updateGeneralInformation,
    };

    return (
        <GeneralInformationContext.Provider value={contextValue}>
            {children}
        </GeneralInformationContext.Provider>
    );
};
