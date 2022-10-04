import React, {
    useState,
    FC,
    useCallback,
    useMemo,
    ChangeEvent,
    useEffect
} from 'react';
import { observer } from 'mobx-react';
import useSound from 'use-sound';

// yandex-ui
import { Button } from '@yandex/ui/Button/desktop/bundle';
import { RadioButton } from '@yandex/ui/RadioButton/desktop/bundle';

// components
import { Text } from 'global/Text';
import { Slider } from './Slider';
import { MetronomeVisualizer as Visualizer } from './Visualizer/Metronome-Visualizer';

// utils
import { visualizeTicking, removeActiveTickClassName } from './Metronome.utils';
import { useGlobalStore } from 'global/hooks/useGlobalStore';

// types
import { TimeSignature } from 'global/types';

// assets
import drums from 'assets/sounds/drums.mp3';
import PlayIcon from '../../assets/icons/play.svg';
import PauseIcon from '../../assets/icons/pause.svg';

// const
import { cnMetronome, cnMetronomeRadio } from './Metronome.const';

// styles
import './Metronome.css';

type SetIntervalID = ReturnType<typeof setInterval> | null;

const COUNT_OF_SECONDS_IN_ONE_MINUTE = 60;

export const Metronome: FC = observer(() => {
    const globalStore = useGlobalStore();
    const [intervalID, setIntervalID] = useState<SetIntervalID>(null);

    const [playSound] = useSound(drums, {
        sprite: {
            kick: [0, 350],
            hihat: [374, 160],
            snare: [666, 290],
            cowbell: [990, 200]
        }
    });

    const startPlaying = useCallback(() => {
        const frequency =
            (COUNT_OF_SECONDS_IN_ONE_MINUTE * 1000) / globalStore.bpm;
        const newIntervalID = setInterval(() => {
            playSound({ id: 'cowbell' });
            visualizeTicking(globalStore.timeSignature);
        }, frequency);
        setIntervalID(newIntervalID);
    }, [globalStore.bpm, playSound, globalStore.timeSignature]);

    useEffect(() => {
        if (intervalID) {
            clearInterval(intervalID);
            startPlaying();
            removeActiveTickClassName();
        }
    }, [globalStore.bpm, globalStore.timeSignature]);

    const handlePlayClick = useCallback(() => {
        if (intervalID) {
            clearInterval(intervalID);
            setIntervalID(null);
            removeActiveTickClassName();
        } else {
            startPlaying();
        }
    }, [intervalID, globalStore.bpm, playSound, globalStore.timeSignature]);

    const handleSliderChange = useCallback((value: number) => {
        globalStore.setBpm(value);
    }, []);

    const handleRadioChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            globalStore.setTimeSignature(event.target.value as TimeSignature);
        },
        []
    );

    const radioOptions = useMemo(
        () => [
            { value: TimeSignature.ThreeQuarters, children: '3/4' },
            { value: TimeSignature.FourQuarters, children: '4/4' },
            { value: TimeSignature.SixEights, children: '6/8' },
            { value: TimeSignature.TwoSeconds, children: '2/2' }
        ],
        []
    );

    const isPlaying = useMemo(() => Boolean(intervalID), [intervalID]);

    return (
        <div className={cnMetronome()}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Text type="h2">{globalStore.bpm}</Text>
                {globalStore.currentSong && (
                    <div style={{ marginLeft: 'var(--space-m)' }}>
                        <Text type="body1" as="div">
                            {globalStore.currentSong.title}
                        </Text>
                        <Text type="body2" as="div">
                            {globalStore.currentSong.author}
                        </Text>
                    </div>
                )}
            </div>
            <Slider value={globalStore.bpm} onChange={handleSliderChange} />
            <Visualizer timeSignature={globalStore.timeSignature} />
            <RadioButton
                className={cnMetronomeRadio()}
                size="m"
                view="default"
                value={globalStore.timeSignature}
                options={radioOptions}
                onChange={handleRadioChange}
            />
            <Button
                width="max"
                view="action"
                size="m"
                onClick={handlePlayClick}
            >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </Button>
        </div>
    );
});
