import React, { FC, createContext } from 'react';

// components
import { ApplicationContent as Content } from './Content/Application-Content';
import { ApplicationHeader as Header } from './Header/Application-Header';

// stores
import { ApplicationStore } from './Application.store';

// const
import { cnApplication, cnApplicationFooter } from './Application.const';

// styles
import './Application.css';

const globalStore = new ApplicationStore();
export const GlobalStoreContext = createContext(globalStore);

export const Application: FC = () => {
    return (
        <GlobalStoreContext.Provider value={globalStore}>
            <div className={cnApplication()}>
                <Header />
                <Content />
                <div className={cnApplicationFooter()}>Footer</div>
            </div>
        </GlobalStoreContext.Provider>
    );
};
