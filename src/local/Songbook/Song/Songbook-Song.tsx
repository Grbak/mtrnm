import React, { FC, useCallback } from 'react';
import { observer } from 'mobx-react';

// yandex-ui
import { Button } from '@yandex/ui/Button/desktop/bundle';

// components
import { Text } from 'global/Text';
// import { IconButton } from 'global/IconButton';

// utils
import { useGlobalStore } from 'global/hooks/useGlobalStore';
import { useThemeStore } from 'global/hooks/useThemeStore';

// types
import { Song } from '../Songbook';

// const
import {
    cnSongbookSong,
    cnSongbookSongInfo,
    cnSongbookSongButton
} from '../Songbook.const';

// styles
import './Songbook-Song.css';

type SongbookSongProps = Song & {
    className?: string;
    onDelete: () => void;
};

export const SongbookSong: FC<SongbookSongProps> = observer(
    ({ className, title, author, bpm, timeSignature, onDelete }) => {
        const globalStore = useGlobalStore();
        const themeStore = useThemeStore();

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
                <div style={{ flexShrink: 0 }}>
                    <Button
                        className={cnSongbookSongButton()}
                        key={`set-${title}-song-button-${themeStore.theme}`}
                        view="link"
                        size="m"
                        onClick={handleSet}
                    >
                        <svg
                            style={{ marginTop: '8px' }}
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
                    <Button
                        className={cnSongbookSongButton()}
                        key={`delete-${title}-song-button-${themeStore.theme}`}
                        view="default"
                        size="m"
                        onClick={onDelete}
                    >
                        <svg
                            style={{ marginTop: '8px' }}
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
