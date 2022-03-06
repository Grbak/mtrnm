import React from 'react';

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
            <div className={cnApplicationContent()}>
                Content (There will be my metronome)
            </div>
            <div className={cnApplicationFooter()}>
                Footer
            </div>
        </div>
    )
}