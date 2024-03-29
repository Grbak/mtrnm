import React, { FC, useState, useCallback } from 'react';
import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';

// yandex-ui
import { Textinput } from '@yandex/ui/Textinput/desktop/bundle';
import { Button } from '@yandex/ui/Button/desktop/bundle';
import { Select } from '@yandex/ui/Select/desktop/bundle';

// components
import { Text } from 'global/Text';

// stores
import { SongbookStore } from '../Songbook.store';

// utils
import { useThemeStore } from 'global/hooks/useThemeStore';

// types
import { TimeSignature } from 'global/types';

// const
import { DEFAULT_BPM_VALUE } from 'global/stores/Global.store';
import {
    cnSongbookAddSongFormText,
    cnSongbookAddSongFormInput
} from '../Songbook.const';

// styles
import './Songbook-AddSongForm.css';

type SongbookAddSongForm = {
    store: SongbookStore;
};

export const SongbookAddSongForm: FC<SongbookAddSongForm> = observer(
    ({ store }) => {
        const { t } = useTranslation();
        const themeStore = useThemeStore();

        const [title, setTitle] = useState('');
        const [author, setAuthor] = useState('');
        const [bpm, setBpm] = useState(DEFAULT_BPM_VALUE);

        const handleSongAdd = useCallback(() => {
            store.putSong({
                title,
                author,
                bpm,
                timeSignature: TimeSignature.FourQuarters
            });
            store.setIsAddSongFormOpened(false);
        }, [title, author]);

        return (
            <>
                <Text
                    className={cnSongbookAddSongFormText()}
                    type="body1"
                    as="div"
                >
                    {t(
                        // eslint-disable-next-line max-len
                        `Soon you will be able to add new songs via the search bar below:`
                    )}
                </Text>
                <Select
                    options={[]}
                    width="max"
                    placeholder={t('Search...')}
                    disabled
                    size="m"
                    view="default"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    style={{
                        marginBottom: 'var(--space-xl)'
                    }}
                />
                <Text
                    className={cnSongbookAddSongFormText()}
                    type="body1"
                    as="div"
                >
                    {t(
                        // eslint-disable-next-line max-len
                        `Now you can do it by manually filling in the following fields:`
                    )}
                </Text>
                <Textinput
                    className={cnSongbookAddSongFormInput()}
                    key={`title-input-${themeStore.theme}`}
                    autoFocus
                    placeholder={t('Type title')}
                    size="m"
                    view="default"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <Textinput
                    className={cnSongbookAddSongFormInput()}
                    key={`author-input-${themeStore.theme}`}
                    placeholder={t('Type author')}
                    size="m"
                    view="default"
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                />
                <Textinput
                    className={cnSongbookAddSongFormInput()}
                    key={`bpm-input-${themeStore.theme}`}
                    type="number"
                    placeholder={t('Type bpm')}
                    size="m"
                    view="default"
                    value={bpm}
                    onChange={(event) =>
                        setBpm(parseInt(event.target.value, 10))
                    }
                />
                <Button
                    key={`add-song-button-${themeStore.theme}`}
                    onClick={handleSongAdd}
                    view="link"
                    width="max"
                    size="m"
                >
                    {t('Add song')}
                </Button>
            </>
        );
    }
);
