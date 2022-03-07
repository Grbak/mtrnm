import React, { useRef, useState } from 'react';

// yandex-ui
import { Button } from '@yandex/ui/Button/desktop/bundle'
import { Popup } from '@yandex/ui/Popup/desktop/bundle'

// const
import { cnApplicationHeader, cnApplicationHeaderAddon } from '../Application.const';

// styles
import './Application-Header.css';

export const ApplicationHeader = () => {
    const [showPopup, setShowPopup] = useState(false);
    const langAnchor = useRef();
    return (
        <div className={cnApplicationHeader()}>
            mtrnm
            <div className={cnApplicationHeaderAddon()}>
                <div ref={langAnchor} onClick={() => setShowPopup(true)}>
                    Language
                </div>
                <Popup visible={showPopup} onClose={() => setShowPopup(false)} view="default" target="anchor" anchor={langAnchor}>
                    <div>Ru</div>
                    <div>Eng</div>
                </Popup>
                <Button view="pseudo" size="m">
                    Log out
                </Button>
            </div>
        </div>
    )
}