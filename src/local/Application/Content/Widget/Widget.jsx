import React from 'react';

// const
import { cnWidget } from './Widget.const';

// styles
import './Widget.css';

export const Widget = ({ children, className }) => {
    return (
        <div className={cnWidget(null, [className])}>
            {children}
        </div>
    )
}