import React, { FC } from 'react';

// components
import { ApplicationContent as Content } from './Content/Application-Content';
import { ApplicationHeader as Header } from './Header/Application-Header';

// utils
import { GlobalStoreProvider } from 'global/stores/Global.store';

// const
import { cnApplication, cnApplicationFooter } from './Application.const';

// styles
import './Application.css';

export const Application: FC = () => {
    return (
        <GlobalStoreProvider>
            <div className={cnApplication()}>
                <Header />
                <Content />
                <div className={cnApplicationFooter()}>Footer</div>
            </div>
        </GlobalStoreProvider>
    );
};
