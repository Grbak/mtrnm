import React, { FC, useCallback, useState } from 'react';
import { observer } from 'mobx-react';

// yandex-ui
import { Textinput } from '@yandex/ui/Textinput/desktop/bundle';
import { Button } from '@yandex/ui/Button/desktop/bundle';
// import { Spin } from '@yandex/ui/Spin/desktop/bundle';

// components
import { SongbookSong as Song } from './Song/Songbook-Song';

// stores
import { SongbookStore } from './Songbook.store';

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
    const [store] = useState(new SongbookStore());
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSongAdd = useCallback(() => {
        store.putSong({
            title,
            author,
            bpm: 150,
            timeSignature: TimeSignature.FourQuarters
        });
        setTitle('');
        setAuthor('');
    }, [title, author]);

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
            <Textinput
                placeholder="Type title"
                size="m"
                view="default"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                style={{
                    marginBottom: 'var(--space-m)'
                }}
            />
            <Textinput
                placeholder="Type author"
                size="m"
                view="default"
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
                style={{
                    marginBottom: 'var(--space-m)'
                }}
            />
            <Button onClick={handleSongAdd} view="link" width="max" size="m">
                Add song
            </Button>
        </div>
    );
    // );
});
