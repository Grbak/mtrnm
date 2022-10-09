import React, { FC, useEffect } from 'react';

// components
import { Grid } from 'local/Grid';

// utils
import { useGlobalStore } from 'global/hooks/useGlobalStore';

// const
import { cnApplicationContent } from '../Application.const';

// styles
import './Application-Content.css';

export const ApplicationContent: FC = () => {
    const globalStore = useGlobalStore();

    useEffect(() => {
        document.documentElement.dataset.theme = globalStore.themeStore.theme;
        // localStorage.setItem('theme', theme);
    }, [globalStore.themeStore.theme]);

    return (
        <div className={cnApplicationContent()}>
            <Grid />
        </div>
    );
};
