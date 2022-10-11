import React, { FC, memo, useCallback } from 'react';

// yandex-ui
import { Button } from '@yandex/ui/Button/desktop/bundle';

// components
import { Text } from 'global/Text';
// import { IconButton } from 'global/IconButton';

// utils
import { useGlobalStore } from 'global/hooks/useGlobalStore';

// types
import { Song } from '../Songbook';

// const
import { cnSongbookSong, cnSongbookSongInfo } from '../Songbook.const';

// styles
import './Songbook-Song.css';

type SongbookSongProps = Song & {
    className?: string;
    onDelete: () => void;
};

export const SongbookSong: FC<SongbookSongProps> = memo(
    ({ className, title, author, bpm, timeSignature, onDelete }) => {
        const globalStore = useGlobalStore();

        const handleSet = useCallback(() => {
            globalStore.setSong({
                title,
                author,
                bpm,
                timeSignature
            });
        }, []);

        return (
            <div className={cnSongbookSong(null, [className])}>
                <div className={cnSongbookSongInfo()}>
                    <Text type="body1">{title}</Text>
                    <Text type="body2">{author}</Text>
                </div>
                <div>
                    <Button view="link" size="m" onClick={handleSet}>
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
                    <Button view="default" size="m" onClick={onDelete}>
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
                </div>
                {/* <Text type="h4">{bpm}</Text> */}
            </div>
        );
    }
);
