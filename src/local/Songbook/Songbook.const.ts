import { cn } from '@bem-react/classname';

// types
import { Song } from '../Songbook';
import { TimeSignature } from 'global/types';

const blockName = 'Songbook';
export const cnSongbook = cn(blockName);
export const cnSongbookList = cn(blockName, 'List');
export const cnSongbookSong = cn(blockName, 'Song');
export const cnSongbookSongTitle = cn(blockName, 'SongTitle');
// export const cnSongbookLoader = cn(blockName, 'Loader');

export const defaultSongs: Song[] = [
    {
        title: 'Freaks',
        author: 'Surf Curse',
        bpm: 180,
        timeSignature: TimeSignature.FourQuarters
    },
    {
        title: 'Still Breathing',
        author: 'Green Day',
        bpm: 150,
        timeSignature: TimeSignature.FourQuarters
    },
    {
        title: "Can't Take My Eyes Off You",
        author: 'Muse',
        bpm: 120,
        timeSignature: TimeSignature.FourQuarters
    },
    {
        title: 'Radiohead',
        author: 'Fake Plastic Trees',
        bpm: 100,
        timeSignature: TimeSignature.FourQuarters
    },
    {
        title: 'You Know What They Do to Guys Like Us in Prison',
        author: 'My Chemical Romance',
        bpm: 135,
        timeSignature: TimeSignature.FourQuarters
    },
    {
        title: 'Pieces',
        author: 'Sum 41',
        bpm: 130,
        timeSignature: TimeSignature.FourQuarters
    },
    {
        title: 'American Idiot',
        author: 'Green Day',
        bpm: 150,
        timeSignature: TimeSignature.FourQuarters
    },
    {
        title: 'Creep',
        author: 'Radiohead',
        bpm: 140,
        timeSignature: TimeSignature.FourQuarters
    },
    {
        title: 'The End.',
        author: 'My Chemical Romance',
        bpm: 115,
        timeSignature: TimeSignature.FourQuarters
    },
    {
        title: '1999-2000',
        author: 'Gorillaz',
        bpm: 120,
        timeSignature: TimeSignature.FourQuarters
    },
    {
        title: 'Stand by Me',
        author: 'Oasis',
        bpm: 130,
        timeSignature: TimeSignature.FourQuarters
    }
];
