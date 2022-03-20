import React, { useState, FC, useCallback, useMemo, ChangeEvent } from 'react';
import useSound from 'use-sound';

// yandex-ui
import { Button } from '@yandex/ui/Button/desktop/bundle';
import { RadioButton } from '@yandex/ui/RadioButton/desktop/bundle';

// assets
import drums from 'assets/sounds/drums.mp3';

// components
import { Text } from 'global/Text';
import { Slider } from './Slider';

// const
import { cnMetronome, cnMetronomeRadio } from './Metronome.const';

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

    const handlePlayClick = useCallback(() => {
        if (intervalID) {
            clearInterval(intervalID);
            setIntervalID(null);
        } else {
            const frequency = (COUNT_OF_SECONDS_IN_ONE_MINUTE * 1000) / bpm;
            const newIntervalID = setInterval(() => {
                tick({ id: 'cowbell' });
            }, frequency);
            setIntervalID(newIntervalID);
        }
    }, [intervalID, bpm]);

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

    return (
        <div className={cnMetronome()}>
            <Text type="h2">{bpm}</Text>
            <Slider value={bpm} onChange={handleSliderChange} />
            <div style={{ display: 'flex', gap: 'var(--space-m)' }}>
                <div className="xo" />
                <div className="xo" />
                <div className="xo" />
                <div className="xo" />
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
                XO!
            </Button>
        </div>
    );
};
