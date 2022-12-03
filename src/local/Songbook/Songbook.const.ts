import { cn } from '@bem-react/classname';

// types
import { Song } from '../Songbook';
import { TimeSignature } from 'global/types';

const blockName = 'Songbook';
export const cnSongbook = cn(blockName);
export const cnSongbookList = cn(blockName, 'List');
export const cnSongbookSong = cn(blockName, 'Song');
export const cnSongbookSongInfo = cn(blockName, 'SongInfo');
export const cnSongbookSongButton = cn(blockName, 'SongButton');
export const cnSongbookAddSongFormText = cn(blockName, 'AddSongFormText');
export const cnSongbookAddSongFormInput = cn(blockName, 'AddSongFormInput');
// export const cnSongbookLoader = cn(blockName, 'Loader');

export const defaultSongs: Song[] = [
    {
        title: 'Old Yellow Bricks',
        author: 'Arctic Monkeys',
        bpm: 135,
        timeSignature: TimeSignature.FourQuarters
    },
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
        title: 'Fake Plastic Trees',
        author: 'Radiohead',
        bpm: 100,
        timeSignature: TimeSignature.FourQuarters
    },
    // {
    //     // eslint-disable-next-line max-len
    //     title: `Our Lawyer Made Us Change The Name Of This Song So We Wouldn't Get Sued`,
    //     author: 'Fall Out Boy',
    //     bpm: 160,
    //     timeSignature: TimeSignature.FourQuarters
    // },
    {
        title: 'Is This It',
        author: 'The Strokes',
        bpm: 96,
        timeSignature: TimeSignature.FourQuarters
    },
    {
        title: 'Undone - The Sweater Song',
        author: 'Weezer',
        bpm: 80,
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
