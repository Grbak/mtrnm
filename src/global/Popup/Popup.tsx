import React, { FC } from 'react';

// yandex-ui
import {
    Popup as BasePopup,
    IPopupProps
} from '@yandex/ui/Popup/desktop/bundle';
import { IPopupTargetAnchorProps } from '@yandex/ui/Popup';

// const
import { cnPopup, cnPopupItem } from './Popup.const';

// styles
import './Popup.css';

type PopupPropsPropsPropsProps = Pick<
    IPopupProps,
    'visible' | 'onClose' | 'className' | 'direction'
> &
    Pick<IPopupTargetAnchorProps, 'anchor'>;

export const Popup: FC<PopupPropsPropsPropsProps> = ({
    visible,
    onClose,
    anchor,
    className,
    direction
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
            <div className={cnPopupItem()}>test</div>
            <div className={cnPopupItem()}>test</div>
            <div className={cnPopupItem()}>test</div>
        </BasePopup>
    );
};
