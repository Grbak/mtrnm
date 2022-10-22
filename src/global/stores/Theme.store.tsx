import React, { createContext, ReactNode, useEffect } from 'react';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';

export enum Theme {
    Light = 'light',
    Dark = 'dark'
}

export class ThemeStore {
    constructor() {
        makeAutoObservable(this);
    }

    theme: Theme = Theme.Dark;

    toggleTheme = () => {
        this.theme = this.theme === Theme.Light ? Theme.Dark : Theme.Light;
    };
}

type ThemeStoreProviderProps = {
    children: ReactNode;
};

const themeStore = new ThemeStore();
export const ThemeStoreContext = createContext<ThemeStore>(themeStore);

export const ThemeStoreProvider = observer(
    ({ children }: ThemeStoreProviderProps) => {
        useEffect(() => {
            document.documentElement.dataset.theme = themeStore.theme;
            // localStorage.setItem('theme', theme);
        }, [themeStore.theme]);

        return (
            <ThemeStoreContext.Provider value={themeStore}>
                {children}
            </ThemeStoreContext.Provider>
        );
    }
);
