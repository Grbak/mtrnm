import React from 'react';

// components
import { IconButton } from 'global/IconButton';

// const
import { cnWidget, cnWidgetHeader, cnWidgetHeaderAddon } from './Widget.const';

// styles
import './Widget.css';

export const Widget = ({ children, title, className }) => {
    return (
        <div className={cnWidget(null, [className])}>
            <div className={cnWidgetHeader()}>
                {title}
                <div className={cnWidgetHeaderAddon()}>
                    <IconButton>
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
                </div>
            </div>
            {children}
        </div>
    );
};
