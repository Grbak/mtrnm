import React, { FC, useCallback, useState } from 'react';
import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';

// yandex-ui
import { Button } from '@yandex/ui/Button/desktop/bundle';

// components
import { SongbookSong as Song } from './Song/Songbook-Song';
import { SongbookAddSongForm as AddSongForm } from './AddSongForm/Songbook-AddSongForm';

// stores
import { SongbookStore } from './Songbook.store';

// utils
import { useThemeStore } from 'global/hooks/useThemeStore';

// types
import { TimeSignature } from 'global/types';

// const
// import { cnSongbook, cnSongbookList, cnSongbookLoader } from './Songbook.const';
import { cnSongbook, cnSongbookList } from './Songbook.const';

// styles
import './Songbook.css';

export type Song = {
    title: string;
    author: string;
    bpm: number;
    timeSignature: TimeSignature;
};

export const Songbook: FC = observer(() => {
    const { t } = useTranslation();
    const themeStore = useThemeStore();
    const [store] = useState(new SongbookStore());

    const handleSongDelete = useCallback(
        (index: number) => () => {
            store.deleteSong(index);
        },
        []
    );

    // store.isLoading && setTimeout(() => store.setIsLoading(false), 1000);

    // return store.isLoading ? (
    //     <Spin className={cnSongbookLoader()} progress view="default" size="l" />
    // ) : (
    return (
        <div className={cnSongbook()}>
            {store.isAddSongFormOpened ? (
                <AddSongForm store={store} />
            ) : (
                <>
                    <div className={cnSongbookList()}>
                        {store.songs.map((item: Song, index: number) => (
                            <Song
                                key={`${item.author}-${item.title}`}
                                title={item.title}
                                author={item.author}
                                bpm={item.bpm}
                                timeSignature={item.timeSignature}
                                onDelete={handleSongDelete(index)}
                            />
                        ))}
                    </div>
                    <Button
                        key={`new-song-button-${themeStore.theme}`}
                        width="max"
                        view="link"
                        size="m"
                        onClick={() => store.setIsAddSongFormOpened(true)}
                    >
                        {t('Add song')}
                    </Button>
                </>
            )}
        </div>
    );
    // );
});
