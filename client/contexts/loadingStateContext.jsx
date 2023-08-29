import React, { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState } from 'react';

const initialValue = new Map();

const LoadingStateContext = createContext(initialValue);

export const useLoadingStateContext = () => useContext(LoadingStateContext);

export const LoadingStateProvider = ({ children }) => {
    const [components, setComponents] = useState(initialValue);

    const componentStartedLoading = useCallback((componentName) => {
        setComponents(new Map([...components.entries(), [componentName, true]]));
    }, [components, setComponents]);

    const componentFinishedLoading = useCallback((componentName) => {
        setComponents(new Map([...components.entries(), [componentName, false]]));
    }, [components, setComponents]);

    const isLoading = useMemo(() => components.size === 0 || [...components.values()].some(Boolean), [components]);

    const contextValue = useMemo(() => ({
        isLoading,
        componentStartedLoading,
        componentFinishedLoading,
    }), [isLoading]);

    return (
        <LoadingStateContext.Provider value={contextValue}>
            {children}
        </LoadingStateContext.Provider>
    );
};
