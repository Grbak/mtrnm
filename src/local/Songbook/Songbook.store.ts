import { makeAutoObservable } from 'mobx';

// types
import { Song } from './Songbook';
// import { TimeSignature } from 'global/types';

// const
import { defaultSongs } from './Songbook.const';

export class SongbookStore {
    constructor() {
        makeAutoObservable(this);
        const savedSongs = localStorage.getItem('songs');
        this.songs = savedSongs ? JSON.parse(savedSongs) : defaultSongs;
    }

    search = '';

    changeSearch = (value: string) => {
        this.search = value;
    };

    // isLoading = true;

    // setIsLoading = (value: boolean) => {
    //     this.isLoading = value;
    // };

    songs: Song[] = [];

    putSong = (value: Song) => {
        this.songs.push(value);
        localStorage.setItem('songs', JSON.stringify(this.songs));
    };

    deleteSong = (index: number) => {
        this.songs.splice(index, 1);
        localStorage.setItem('songs', JSON.stringify(this.songs));
    };
}
