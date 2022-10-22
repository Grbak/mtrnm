import { useContext } from 'react';
import { ThemeStoreContext } from 'global/stores/Theme.store';

export const useThemeStore = () => {
    const themeStore = useContext(ThemeStoreContext);

    return themeStore;
};
