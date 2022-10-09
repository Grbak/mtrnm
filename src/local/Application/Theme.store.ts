import { makeAutoObservable } from 'mobx';

export enum Theme {
    Light = 'light',
    Dark = 'dark'
}

export class ThemeStore {
    constructor() {
        makeAutoObservable(this);
    }

    theme: Theme = Theme.Light;

    toggleTheme = () => {
        this.theme = this.theme === Theme.Light ? Theme.Dark : Theme.Light;
    };
}
