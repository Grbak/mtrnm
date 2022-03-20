import React, { FC, useState, useCallback, RefObject } from 'react';

// const
import { cnIconButton } from './IconButton.const';

// styles
import './IconButton.css';

type IconButtonProps = {
    className?: string;
    size?: 's' | 'm';
    onClick: () => void;
    innerRef?: RefObject<HTMLDivElement>;
    pressed?: boolean;
};

export const IconButton: FC<IconButtonProps> = ({
    className,
    size = 'm',
    onClick,
    children,
    innerRef,
    pressed
}) => {
    const [isPressed, setIsPressed] = useState(false);
    const handleMouseDown = useCallback(() => {
        setIsPressed(true);
    }, []);

    const handleClick = useCallback(() => {
        onClick && onClick();
        setIsPressed(false);
    }, [onClick]);

    const handleMouseLeave = useCallback(() => {
        isPressed && setIsPressed(false);
    }, [isPressed]);

    return (
        <div
            className={cnIconButton({ size, pressed: isPressed || pressed }, [
                className
            ])}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onClick={handleClick}
            ref={innerRef}
        >
            {children}
        </div>
    );
};
