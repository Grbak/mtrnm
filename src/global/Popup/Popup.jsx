import React from 'react';

// yandex-ui
import { Popup as BasePopup } from '@yandex/ui/Popup/desktop/bundle';

// const
import { cnPopup, cnPopupItem } from './Popup.const';

// styles
import './Popup.css';

export const Popup = ({ visible, onClose, anchor, className, direction }) => {
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
            <div className={cnPopupItem}>test</div>
        </BasePopup>
    );
};
