import React, { FC } from 'react';

// const
import { cnText } from './Text.const';

// styles
import './Text.css';

type TextProps = {
    className?: string;
    type: 'h2' | 'h3' | 'h4' | 'body1' | 'body2';
};

export const Text: FC<TextProps> = ({ className, type, children }) => {
    return <div className={cnText({ type }, [className])}>{children}</div>;
};
