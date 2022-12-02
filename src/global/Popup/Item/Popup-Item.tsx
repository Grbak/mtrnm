import React, { FC } from 'react';

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
    return (
        <Text className={cnPopupItem()} onClick={onClick} type="body1" as="div">
            {content}
        </Text>
    );
};
