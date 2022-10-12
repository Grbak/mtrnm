import React, { useRef, useState, FC } from 'react';
import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';

// yandex-ui
import { Button } from '@yandex/ui/Button/desktop/bundle';
import { Tumbler } from '@yandex/ui/Tumbler/desktop/bundle';

// components
import { Popup } from 'global/Popup';

// uitls
import { useGlobalStore } from 'global/hooks/useGlobalStore';

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
    const globalStore = useGlobalStore();
    const [showPopup, setShowPopup] = useState(false);
    const langAnchor = useRef();
    const { t, i18n } = useTranslation();
    return (
        <div className={cnApplicationHeader()}>
            mtrnm
            <div className={cnApplicationHeaderAddon()}>
                <Tumbler
                    checked={globalStore.themeStore.theme === Theme.Dark}
                    onChange={globalStore.themeStore.toggleTheme}
                    view="default"
                    size="m"
                />
                <Button
                    view="clear"
                    size="m"
                    controlRef={langAnchor}
                    onClick={() => {
                        setShowPopup(true);
                        const newLang = i18n.language === 'en' ? 'ru' : 'en';
                        i18n.changeLanguage(newLang);
                    }}
                >
                    {t('Language')}
                </Button>
                <Popup
                    visible={showPopup}
                    onClose={() => setShowPopup(false)}
                    anchor={langAnchor}
                    items={[]}
                />
                <Button view="default" size="m">
                    {t('Log out')}
                </Button>
            </div>
        </div>
    );
});
