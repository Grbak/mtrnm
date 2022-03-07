import React from 'react';

// components
import { ApplicationContent as Content } from './Content/Application-Content';

// const
import { cnApplication, cnApplicationHeader, cnApplicationContent, cnApplicationFooter } from './Application.const';

// styles
import './Application.css';

export const Application = () => {
    return (
        <div className={cnApplication()}>
            <div className={cnApplicationHeader()}>
                Header
            </div>
            <Content />
            <div className={cnApplicationFooter()}>
                Footer
            </div>
        </div>
    )
}