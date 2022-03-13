import React, { FC } from 'react';

// yandex-ui
import {
    Popup as BasePopup,
    IPopupProps
} from '@yandex/ui/Popup/desktop/bundle';
import { IPopupTargetAnchorProps } from '@yandex/ui/Popup';

// components
import { PopupItem as Item, PopupItemProps } from './Item/Popup-Item';

// const
import { cnPopup } from './Popup.const';

// styles
import './Popup.css';

type PopupItem = PopupItemProps;

type PopupProps = Pick<
    IPopupProps,
    'visible' | 'onClose' | 'className' | 'direction'
> &
    Pick<IPopupTargetAnchorProps, 'anchor'> & {
        items: PopupItem[];
    };

export const Popup: FC<PopupProps> = ({
    visible,
    onClose,
    anchor,
    className,
    direction,
    items
}) => {
    return (
        <BasePopup
            className={cnPopup(null, [className])}
            visible={visible}
            onClose={onClose}
            anchor={anchor}
            view="default"
            target="anchor"
            keepMounted={false}
            direction={direction}
            mainOffset={12}
        >
            {items.map((item: PopupItem) => (
                <Item
                    content={item.content}
                    onClick={item.onClick}
                    key={`popup-item-${item.content}`}
                />
            ))}
        </BasePopup>
    );
};
