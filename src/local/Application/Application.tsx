import React, { FC } from 'react';
import i18n from 'i18next';
import { observer } from 'mobx-react';
import { useTranslation, initReactI18next } from 'react-i18next';

// // yandex-ui
import { cnTheme } from '@yandex/ui/Theme';

// components
import { ApplicationContent as Content } from './Content/Application-Content';
import { ApplicationHeader as Header } from './Header/Application-Header';

// utils
import { GlobalStoreProvider } from 'global/stores/Global.store';
import { ThemeStoreProvider } from 'global/stores/Theme.store';
import { useThemeStore } from 'global/hooks/useThemeStore';

// const
import { cnApplication, cnApplicationFooter } from './Application.const';

// styles
import './Application.css';
import '../../themes/dark.css';
import '../../themes/light.css';

i18n.use(initReactI18next).init({
    resources: {
        // en: {
        //     translation: {
        //         Footer: 'Footer'
        //     }
        // },
        ru: {
            translation: {
                Metronome: 'Метроном',
                Statisticts: 'Статистика',
                Songbook: 'Сонгбук',
                Footer: 'Футер',
                Move: 'Переместить',
                Hide: 'Cкрыть',
                Language: 'Язык',
                'Type title': 'Введите название',
                'Type author': 'Введите автора',
                'Add song': 'Добавить песню',
                'Log out': 'Выход',
                'This widget is still under development':
                    'Этот виджет пока находится в разработке',
                'You will be able to see statistics of your lessons soon':
                    'Скоро вы сможете увидеть здесь статистику своих занятий'
            }
        }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});

export const Application: FC = observer(() => {
    const { t } = useTranslation();
    const themeStore = useThemeStore();
    const themeClassName = cnTheme({ color: themeStore.theme });

    return (
        <ThemeStoreProvider>
            <GlobalStoreProvider>
                <div className={cnApplication(null, [themeClassName])}>
                    <Header />
                    <Content />
                    <div className={cnApplicationFooter()}>{t('Footer')}</div>
                </div>
            </GlobalStoreProvider>
        </ThemeStoreProvider>
    );
});
