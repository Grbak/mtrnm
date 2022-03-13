/* eslint-disable max-len */
import React, { useState, useRef, useCallback } from 'react';

// components
import { IconButton } from 'global/IconButton';
import { Text } from 'global/Text';
import { Plug } from 'global/Plug';
import { Popup } from 'global/Popup';

// const
import {
    cnWidget,
    cnWidgetHeader,
    cnWidgetHeaderAddon,
    cnWidgetTitle,
    cnWidgetContent,
    cnWidgetPlug
} from './Widget.const';

// styles
import './Widget.css';

export const Widget = ({ children, title, className, isClosed }) => {
    const [showPopup, setShowPopup] = useState(false);
    const anchor = useRef();

    const handlePopupOpen = useCallback(() => {
        setShowPopup(true);
    }, []);

    const handlePopupClose = useCallback(() => {
        setShowPopup(false);
    }, []);

    const popupItems = [
        {
            content: 'Move',
            onClick: () => console.log('Move')
        },
        {
            content: 'Hide',
            onClick: () => console.log('Hide')
        }
    ];

    return (
        <div className={cnWidget(null, [className])}>
            {isClosed ? (
                <Plug
                    className={cnWidgetPlug()}
                    title="This widget is still under development"
                    subtitle="You will be able to see statistics of your lessons soon"
                />
            ) : (
                <>
                    <div className={cnWidgetHeader()}>
                        <Text className={cnWidgetTitle()} type="h4">
                            {title}
                        </Text>
                        <div className={cnWidgetHeaderAddon()}>
                            <IconButton
                                onClick={handlePopupOpen}
                                innerRef={anchor}
                                pressed={showPopup}
                            >
                                <svg
                                    width="4"
                                    height="18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        // eslint-disable-next-line max-len
                                        d="M4 2a2 2 0 11-4 0 2 2 0 014 0zm0 7a2 2 0 11-4 0 2 2 0 014 0zm-2 9a2 2 0 100-4 2 2 0 000 4z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </IconButton>
                            <Popup
                                visible={showPopup}
                                onClose={handlePopupClose}
                                anchor={anchor}
                                direction="bottom-end"
                                items={popupItems}
                            />
                        </div>
                    </div>
                    <div className={cnWidgetContent()}>{children}</div>
                </>
            )}
        </div>
    );
};
