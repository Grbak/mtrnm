import React, { useRef, useState } from 'react';

// yandex-ui
import { Button } from '@yandex/ui/Button/desktop/bundle';

// components
import { Popup } from 'global/Popup';

// const
import {
    cnApplicationHeader,
    cnApplicationHeaderAddon
} from '../Application.const';

// styles
import './Application-Header.css';

export const ApplicationHeader = () => {
    const [showPopup, setShowPopup] = useState(false);
    const langAnchor = useRef();
    return (
        <div className={cnApplicationHeader()}>
            mtrnm
            <div className={cnApplicationHeaderAddon()}>
                <Button
                    view="clear"
                    size="m"
                    controlRef={langAnchor}
                    onClick={() => setShowPopup(true)}
                >
                    Language
                </Button>
                <Popup
                    visible={showPopup}
                    onClose={() => setShowPopup(false)}
                    anchor={langAnchor}
                    items={[]}
                />
                <Button view="default" size="m">
                    Log out
                </Button>
            </div>
        </div>
    );
};
