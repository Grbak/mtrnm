import React, { FC, useState } from 'react';

// const
import { cnMetronomeVisualizer, cnMetronomeTick } from '../Metronome.const';

type MetronomeVisualizerProps = {};

export const MetronomeVisualizer: FC<MetronomeVisualizerProps> = () => {
    return (
        <div className={cnMetronomeVisualizer()}>
            <div className={cnMetronomeTick()} data-id="1" />
            <div className={cnMetronomeTick()} data-id="2" />
            <div className={cnMetronomeTick()} data-id="3" />
            <div className={cnMetronomeTick()} data-id="4" />
        </div>
    );
};
