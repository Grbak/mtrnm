import React, { useState } from 'react';

// components
import { Button } from '@yandex/ui/Button/desktop/bundle';
import { RadioButton } from '@yandex/ui/RadioButton/desktop/bundle';

// const
import { cnMetronome, cnMetronomeRadio } from './Metronome.const';

// styles
import './Metronome.css';

export const Metronome = () => {
    const [value, setValue] = useState('value3');

    return (
        <div className={cnMetronome()}>
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
                options={[
                    { value: 'value1', children: '2/4' },
                    { value: 'value2', children: '3/4' },
                    { value: 'value3', children: '4/4' },
                    { value: 'value4', children: '6/8' },
                    { value: 'value5', children: '2/2' }
                ]}
                onChange={(event) => setValue(event.target.value)}
            />
            <Button width="max" view="action" size="m">
                XO!
            </Button>
        </div>
    );
};
