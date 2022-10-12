import React, { FC } from 'react';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';

// components
import { ApplicationContent as Content } from './Content/Application-Content';
import { ApplicationHeader as Header } from './Header/Application-Header';

// utils
import { GlobalStoreProvider } from 'global/stores/Global.store';

// const
import { cnApplication, cnApplicationFooter } from './Application.const';

// styles
import './Application.css';

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

export const Application: FC = () => {
    const { t } = useTranslation();

    return (
        <GlobalStoreProvider>
            <div className={cnApplication()}>
                <Header />
                <Content />
                <div className={cnApplicationFooter()}>{t('Footer')}</div>
            </div>
        </GlobalStoreProvider>
    );
};
