import React from 'react';

// components
import { ApplicationContent as Content } from './Content/Application-Content';
import { ApplicationHeader as Header } from './Header/Application-Header';

// const
import { cnApplication, cnApplicationFooter } from './Application.const';

// styles
import './Application.css';

export const Application = () => {
    return (
        <div className={cnApplication()}>
            <Header />
            <Content />
            <div className={cnApplicationFooter()}>Footer</div>
        </div>
    );
};
