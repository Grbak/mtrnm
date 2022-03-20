import React, {
    useState,
    FC,
    useCallback,
    useMemo,
    ChangeEvent,
    useEffect
} from 'react';
import useSound from 'use-sound';

// yandex-ui
import { Button } from '@yandex/ui/Button/desktop/bundle';
import { RadioButton } from '@yandex/ui/RadioButton/desktop/bundle';

// components
import { Text } from 'global/Text';
import { Slider } from './Slider';

// assets
import drums from 'assets/sounds/drums.mp3';
import PlayIcon from '../../assets/icons/play.svg';
import PauseIcon from '../../assets/icons/pause.svg';

// const
import {
    cnMetronome,
    cnMetronomeRadio,
    cnMetronomeVisualizer,
    cnMetronomeTick
} from './Metronome.const';

// styles
import './Metronome.css';

enum TimeSignature {
    TwoQuarters = 'TwoQuarters',
    ThreeQuarters = 'ThreeQuarters',
    FourQuarters = 'FourQuarters',
    SixEights = 'SixEights',
    TwoSeconds = 'TwoSeconds'
}

type SetIntervalID = ReturnType<typeof setInterval> | null;

const COUNT_OF_SECONDS_IN_ONE_MINUTE = 60;

export const Metronome: FC = () => {
    const [value, setValue] = useState(TimeSignature.FourQuarters);
    const [bpm, setBpm] = useState(150);
    const [intervalID, setIntervalID] = useState<SetIntervalID>(null);
    const [tick] = useSound(drums, {
        sprite: {
            kick: [0, 350],
            hihat: [374, 160],
            snare: [666, 290],
            cowbell: [968, 200]
        }
    });

    const startPlaying = useCallback(() => {
        const frequency = (COUNT_OF_SECONDS_IN_ONE_MINUTE * 1000) / bpm;
        const newIntervalID = setInterval(() => {
            tick({ id: 'cowbell' });
        }, frequency);
        setIntervalID(newIntervalID);
    }, [bpm, tick]);

    useEffect(() => {
        if (intervalID) {
            clearInterval(intervalID);
            startPlaying();
        }
    }, [bpm]);

    const handlePlayClick = useCallback(() => {
        if (intervalID) {
            clearInterval(intervalID);
            setIntervalID(null);
        } else {
            startPlaying();
        }
    }, [intervalID, bpm, tick]);

    const handleSliderChange = useCallback((value: number) => {
        setBpm(value);
    }, []);

    const handleRadioChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value as TimeSignature);
        },
        []
    );

    const radioOptions = useMemo(
        () => [
            { value: TimeSignature.TwoQuarters, children: '2/4' },
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
            <Text type="h2">{bpm}</Text>
            <Slider value={bpm} onChange={handleSliderChange} />
            <div className={cnMetronomeVisualizer()}>
                <div className={cnMetronomeTick()} />
                <div className={cnMetronomeTick()} />
                <div className={cnMetronomeTick()} />
                <div className={cnMetronomeTick()} />
            </div>
            <RadioButton
                className={cnMetronomeRadio()}
                size="m"
                view="default"
                value={value}
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
};
