import { cn } from '@bem-react/classname';

const blockName = 'Metronome';
export const cnMetronome = cn(blockName);
export const cnMetronomeRadio = cn(blockName, 'Radio');
export const cnMetronomeVisualizer = cn(blockName, 'Visualizer');
export const cnMetronomeTick = cn(blockName, 'Tick');

export const activeTickClassName = 'Metronome-Tick_active';
