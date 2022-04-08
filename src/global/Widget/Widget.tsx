/* eslint-disable max-len */
import React, {
    useState,
    useRef,
    useCallback,
    FC,
    MouseEventHandler
} from 'react';

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

type WidgetProps = {
    title: string;
    className?: string;
    closed?: boolean;
    onMove: () => void;
    onHide: () => void;
    onMouseDown: MouseEventHandler;
    draggable: boolean;
    blurred: boolean;
};

export const Widget: FC<WidgetProps> = ({
    children,
    title,
    className,
    onMove,
    onHide,
    onMouseDown,
    closed,
    draggable,
    blurred
}) => {
    const [showPopup, setShowPopup] = useState(false);
    const anchor = useRef(null);

    const handlePopupOpen = useCallback(() => {
        setShowPopup(true);
    }, []);

    const handlePopupClose = useCallback(() => {
        setShowPopup(false);
    }, []);

    const handleMove = useCallback(() => {
        setShowPopup(false);
        onMove();
    }, []);

    const popupItems = [
        {
            content: 'Move',
            onClick: handleMove
        },
        {
            content: 'Hide',
            onClick: onHide
        }
    ];

    return (
        <div
            className={cnWidget({ draggable, blurred }, [className])}
            onMouseDown={onMouseDown}
        >
            {closed ? (
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
