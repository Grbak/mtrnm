import React, { FC, ElementType } from 'react';

// const
import { cnText } from './Text.const';

// styles
import './Text.css';

type TextProps = {
    as?: ElementType;
    className?: string;
    onClick?: (event: MouseEvent) => void;
    type: 'h2' | 'h3' | 'h4' | 'h5' | 'body1' | 'body2';
};

export const Text: FC<TextProps> = ({
    className,
    type,
    children,
    onClick,
    as = 'span'
}) => {
    const Component = as;

    return (
        <Component className={cnText({ type }, [className])} onClick={onClick}>
            {children}
        </Component>
    );
};
