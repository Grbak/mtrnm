import { makeAutoObservable } from 'mobx';

// types
import { Song } from './Songbook';

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
            bpm: 180
        },
        {
            title: 'Still Breathing',
            author: 'Green Day',
            bpm: 150
        },
        {
            title: "Can't Take My Eyes Off You",
            author: 'Muse',
            bpm: 120
        },
        {
            title: 'Radiohead',
            author: 'Fake Plastic Trees',
            bpm: 100
        },
        {
            title: 'You Know What They Do to Guys Like Us in Prison',
            author: 'My Chemical Romance',
            bpm: 135
        },
        {
            title: 'Pieces',
            author: 'Sum 41',
            bpm: 130
        },
        {
            title: 'American Idiot',
            author: 'Green Day',
            bpm: 150
        },
        {
            title: 'Creep',
            author: 'Radiohead',
            bpm: 140
        },
        {
            title: 'The End.',
            author: 'My Chemical Romance',
            bpm: 115
        },
        {
            title: '1999-2000',
            author: 'Gorillaz',
            bpm: 120
        },
        {
            title: 'Stand by Me',
            author: 'Oasis',
            bpm: 130
        }
    ];

    putSong = (value: Song) => {
        this.songs.push(value);
    };
}
