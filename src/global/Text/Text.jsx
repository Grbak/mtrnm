import React from 'react';

// const
import { cnText } from './Text.const';

// styles
import './Text.css';

export const Text = ({ className, type, children }) => {
    return <div className={cnText({ type }, [className])}>{children}</div>;
};
