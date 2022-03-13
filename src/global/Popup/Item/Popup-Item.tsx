import React, { FC, useCallback } from 'react';

// components
import { Text } from 'global/Text';

// const
import { cnPopupItem } from '../Popup.const';

// styles
import './Popup-Item.css';

export type PopupItemProps = {
    content: string;
    onClick: () => void;
};

export const PopupItem: FC<PopupItemProps> = ({ content, onClick }) => {
    const handleClick = useCallback(() => {
        onClick && onClick();
    }, []);

    return (
        <div className={cnPopupItem()} onClick={handleClick}>
            <Text type="body1">{content}</Text>
        </div>
    );
};
