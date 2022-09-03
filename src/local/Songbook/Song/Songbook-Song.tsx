import React, { FC, memo, useCallback } from 'react';

// yandex-ui
import { Button } from '@yandex/ui/Button/desktop/bundle';

// components
import { Text } from 'global/Text';
// import { IconButton } from 'global/IconButton';

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
    ({ className, title, author }) => {
        const handleSongSet = useCallback(() => {
            console.log('Song was set');
        }, []);

        return (
            <div className={cnSongbookSong(null, [className])}>
                <div
                    className={cnSongbookSongTitle()}
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <Text type="body1">{title}</Text>
                    <Text type="body2">{author}</Text>
                </div>
                <Button view="link" size="m" onClick={handleSongSet}>
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
                </Button>
                {/* <Text type="h4">{bpm}</Text> */}
            </div>
        );
    }
);
