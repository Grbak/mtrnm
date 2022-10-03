import { makeAutoObservable } from 'mobx';

// types
import { Song } from 'local/Songbook';

const DEFAULT_BPM_VALUE = 150;

export class ApplicationStore {
    constructor() {
        makeAutoObservable(this);
    }

    bpm: number = DEFAULT_BPM_VALUE;

    currentSong: Song | null = null;

    setSong = (song: Song | null) => {
        this.currentSong = song;
        if (song) {
            this.bpm = song.bpm;
        }
    };

    setBpm = (value: number) => {
        this.bpm = value;
    };
}
