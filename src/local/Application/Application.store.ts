import { makeAutoObservable } from 'mobx';

// types
import { Song } from 'local/Songbook';
import { TimeSignature } from 'global/types';
import { ThemeStore } from './Theme.store';

const DEFAULT_BPM_VALUE = 150;

export class ApplicationStore {
    constructor() {
        makeAutoObservable(this);

        const savedSong = localStorage.getItem('currentSong');
        if (savedSong) {
            this.setSong(JSON.parse(savedSong));
            return;
        }

        const savedBpm = Number(localStorage.getItem('bpm'));
        if (savedBpm) {
            this.bpm = savedBpm;
        }

        const savedTimeSignature = localStorage.getItem('timeSignature');
        if (savedTimeSignature) {
            this.timeSignature = savedTimeSignature as TimeSignature;
        }
    }

    bpm: number = DEFAULT_BPM_VALUE;

    timeSignature: TimeSignature = TimeSignature.FourQuarters;

    currentSong: Song | null = null;

    setSong = (song: Song | null) => {
        localStorage.setItem('currentSong', JSON.stringify(song));
        this.currentSong = song;
        if (song) {
            this.bpm = song.bpm;
            this.timeSignature = song.timeSignature;
        }
    };

    setBpm = (value: number) => {
        this.bpm = value;
        this.currentSong = null;
        localStorage.setItem('bpm', String(value));
        localStorage.removeItem('currentSong');
    };

    setTimeSignature = (value: TimeSignature) => {
        this.timeSignature = value;
        this.currentSong = null;
        localStorage.setItem('timeSignature', this.timeSignature);
        localStorage.removeItem('currentSong');
    };

    themeStore = new ThemeStore();
}
