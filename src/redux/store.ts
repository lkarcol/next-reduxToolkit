import { useMemo } from 'react';
import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk'
import rootReducer, { RootState } from './reducer';

let store: ReturnType<typeof initStore>;

function initStore(preloadedState) {
    return configureStore({
        preloadedState,
        reducer: rootReducer
    })
}

export const initializeStore = (preloadedState): ReturnType<typeof initStore> => {
    let _store = store ?? initStore(preloadedState)

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>