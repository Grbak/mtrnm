import React, { FC } from 'react';

// utils
import { getTicksCountFromTimeSignature } from '../Metronome.utils';

// types
import { TimeSignature } from '../Metronome';

// const
import { cnMetronomeVisualizer, cnMetronomeTick } from '../Metronome.const';

type MetronomeVisualizerProps = {
    timeSignature: TimeSignature;
};

export const MetronomeVisualizer: FC<MetronomeVisualizerProps> = ({
    timeSignature
}) => {
    return (
        <div className={cnMetronomeVisualizer()}>
            {Array.from({
                length: getTicksCountFromTimeSignature(timeSignature)
            }).map((_, index) => (
                <div
                    className={cnMetronomeTick()}
                    key={`metronome-tick-${index + 1}`}
                    data-id={index + 1}
                />
            ))}
        </div>
    );
};
