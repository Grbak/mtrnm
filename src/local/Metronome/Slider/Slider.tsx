/* eslint-disable max-len */
import React, { FC, useCallback } from 'react';

// yandex-ui
import { Slider as BaseSlider } from '@yandex/ui/Slider/desktop/bundle';

// components
import { IconButton } from 'global/IconButton';

// const
import { cnSlider } from './Slider.const';

// styles
import './Slider.css';

type SliderProps = {
    value: number;
    onChange: (value: number) => void;
    className?: string;
};

const MIN_BPM = 60;
const MAX_BPM = 240;

export const Slider: FC<SliderProps> = ({ className, value, onChange }) => {
    const handleChange = useCallback((_: any, value: number[]) => {
        onChange(Number(value));
    }, []);

    const handleIncrement = () => {
        onChange(value + 1);
    };

    const handleDecrement = () => {
        onChange(value - 1);
    };

    return (
        <div className={cnSlider(null, [className])}>
            <IconButton onClick={handleDecrement}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                >
                    <rect transform="translate(24 24) rotate(180)" />
                    <path d="M19,13H5a1,1,0,0,1,0-2H19a1,1,0,0,1,0,2Z" />
                </svg>
            </IconButton>
            <BaseSlider
                view="default"
                min={MIN_BPM}
                max={MAX_BPM}
                value={[value]}
                onInput={handleChange}
            />
            <IconButton onClick={handleIncrement}>
                <svg
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    width="32"
                    height="32"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <path d="M381,236H276V131c0-11-9-20-20-20s-20,9-20,20v105H131c-11,0-20,9-20,20s9,20,20,20h105v105c0,11,9,20,20,20  s20-9,20-20V276h105c11,0,20-9,20-20S392,236,381,236z" />
                </svg>
            </IconButton>
        </div>
    );
};
