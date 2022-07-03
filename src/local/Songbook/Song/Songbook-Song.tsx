import React, { FC, memo } from 'react';

// components
import { Text } from 'global/Text';

// types
import { Song } from '../Songbook';

// const
import { cnSongbookSong, cnSongbookSongTitle } from '../Songbook.const';

// styles
import './Songbook-Song.css';

type SongbookSongProps = Song & {
    className?: string;
    title: string;
    author: string;
    bpm: number;
};

export const SongbookSong: FC<SongbookSongProps> = memo(
    ({ className, title, author, bpm }) => {
        return (
            <div className={cnSongbookSong(null, [className])}>
                <div
                    className={cnSongbookSongTitle()}
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <Text type="body1">{title}</Text>
                    <Text type="body2">{author}</Text>
                </div>
                <Text type="h4">{bpm}</Text>
            </div>
        );
    }
);
