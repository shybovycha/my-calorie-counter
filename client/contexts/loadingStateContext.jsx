import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

const initialValue = new Map();

const LoadingStateContext = createContext(initialValue);

export const useLoadingStateContext = () => useContext(LoadingStateContext);

export const LoadingStateProvider = ({ children }) => {
    const [components, setComponents] = useState(initialValue);

    const componentStartedLoading = useCallback((componentName) => {
        components.set(componentName, true);
        setComponents(new Map([...components.entries()]));
    }, [components, setComponents]);

    const componentFinishedLoading = useCallback((componentName) => {
        components.set(componentName, false);
        setComponents(new Map([...components.entries()]));
    }, [components, setComponents]);

    const isLoading = useMemo(() => components.size === 0 || [...components.values()].some(Boolean), [components]);

    const contextValue = {
        isLoading,
        componentStartedLoading,
        componentFinishedLoading,
    };

    return (
        <LoadingStateContext.Provider value={contextValue}>
            {children}
        </LoadingStateContext.Provider>
    );
};
