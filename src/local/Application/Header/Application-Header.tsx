import React, { useRef, useState, FC, useCallback, useMemo } from 'react';
import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';

// yandex-ui
import { Button } from '@yandex/ui/Button/desktop/bundle';
import { Tumbler } from '@yandex/ui/Tumbler/desktop/bundle';

// components
import { Popup } from 'global/Popup';

// uitls
import { useThemeStore } from 'global/hooks/useThemeStore';

// types
import { Theme } from 'global/stores/Theme.store';

// const
import {
    cnApplicationHeader,
    cnApplicationHeaderAddon
} from '../Application.const';

// styles
import './Application-Header.css';

export const ApplicationHeader: FC = observer(() => {
    const themeStore = useThemeStore();
    const [showLangPopup, setShowLangPopup] = useState(false);
    const langAnchor = useRef();
    const { t, i18n } = useTranslation();

    const openLangPopup = useCallback(() => {
        setShowLangPopup(true);
    }, []);

    const closeLangPopup = useCallback(() => {
        setShowLangPopup(false);
    }, []);

    const langItems = useMemo(
        () => [
            {
                content: 'Русский',
                onClick: () => {
                    i18n.changeLanguage('ru');
                    closeLangPopup();
                }
            },
            {
                content: 'English',
                onClick: () => {
                    i18n.changeLanguage('en');
                    closeLangPopup();
                }
            }
        ],
        []
    );

    return (
        <div className={cnApplicationHeader()}>
            mtrnm
            <div className={cnApplicationHeaderAddon()}>
                <Tumbler
                    checked={themeStore.theme === Theme.Dark}
                    onChange={themeStore.toggleTheme}
                    view="default"
                    size="m"
                />
                <Button
                    view="clear"
                    size="m"
                    controlRef={langAnchor}
                    onClick={openLangPopup}
                >
                    {t('Language')}
                </Button>
                <Popup
                    visible={showLangPopup}
                    onClose={closeLangPopup}
                    anchor={langAnchor}
                    items={langItems}
                />
                {/* <Button view="default" size="m">
                    {t('Log out')}
                </Button> */}
            </div>
        </div>
    );
});
