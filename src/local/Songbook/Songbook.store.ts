import { makeAutoObservable } from 'mobx';

// types
import { Song } from './Songbook';
import { TimeSignature } from 'global/types';

export class SongbookStore {
    constructor() {
        makeAutoObservable(this);
    }

    search = '';

    changeSearch = (value: string) => {
        this.search = value;
    };

    isLoading = true;

    setIsLoading = (value: boolean) => {
        this.isLoading = value;
    };

    songs: Song[] = [
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

    putSong = (value: Song) => {
        this.songs.push(value);
    };
}
