import React, { useState, FC, useCallback, useMemo, ChangeEvent } from 'react';

// yandex-ui
import { Button } from '@yandex/ui/Button/desktop/bundle';
import { RadioButton } from '@yandex/ui/RadioButton/desktop/bundle';

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

export const Metronome: FC = () => {
    const [value, setValue] = useState(TimeSignature.FourQuarters);
    const [bpm, setBpm] = useState(150);

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
            <Button width="max" view="action" size="m">
                XO!
            </Button>
        </div>
    );
};
