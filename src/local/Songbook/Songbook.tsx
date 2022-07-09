import React, { FC, useCallback, useState } from 'react';
import { observer } from 'mobx-react';

// yandex-ui
// import { Textinput } from '@yandex/ui/Textinput/desktop/bundle';
import { Button } from '@yandex/ui/Button/desktop/bundle';
import { Spin } from '@yandex/ui/Spin/desktop/bundle';

// components
import { SongbookSong as Song } from './Song/Songbook-Song';

// stores
import { SongbookStore } from './Songbook.store';

// const
import { cnSongbook, cnSongbookList, cnSongbookLoader } from './Songbook.const';

// styles
import './Songbook.css';

export type Song = {
    title: string;
    author: string;
    bpm: number;
};

export const Songbook: FC = observer(() => {
    const [store] = useState(new SongbookStore());

    const handleAdd = useCallback(() => {
        store.putSong({
            title: store.songs[store.songs.length - 1].title + 1,
            author: store.songs[store.songs.length - 1].author + 1,
            bpm: store.songs[store.songs.length - 1].bpm + 1
        });
    }, []);

    store.isLoading && setTimeout(() => store.setIsLoading(false), 1000);

    return store.isLoading ? (
        <Spin className={cnSongbookLoader()} progress view="default" size="l" />
    ) : (
        <div className={cnSongbook()}>
            <div className={cnSongbookList()}>
                {store.songs.map((item: Song) => (
                    <Song
                        key={`${item.author}-${item.title}`}
                        title={item.title}
                        author={item.author}
                        bpm={item.bpm}
                    />
                ))}
            </div>
            <Button onClick={handleAdd} view="link" width="max" size="m">
                Add song
            </Button>
            {/* <Textinput
                title="test"
                size="m"
                view="default"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            /> */}
        </div>
    );
});
