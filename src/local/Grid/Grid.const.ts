import { cn } from '@bem-react/classname';

const blockName = 'Grid';
export const cnGrid = cn(blockName);

export const breakpoints = {
    lg: 1200,
    md: 996,
    sm: 768,
    xs: 640,
    xxs: 0
};

export const columns = {
    lg: 10,
    md: 10,
    sm: 10,
    xs: 4,
    xxs: 2
};

export const initialLayouts = {
    lg: [
        {
            i: 'metronome',
            x: 0,
            y: 0,
            w: 3,
            h: 3
        },
        {
            i: 'statistics',
            x: 3,
            y: 0,
            w: 3,
            h: 3
        },
        {
            i: 'songbook',
            x: 6,
            y: 0,
            w: 4,
            h: 5
        },
        {
            i: 'unknown',
            x: 0,
            y: 3,
            w: 6,
            h: 2
        }
    ],
    md: [
        {
            i: 'metronome',
            x: 0,
            y: 0,
            w: 5,
            h: 3
        },
        {
            i: 'statistics',
            x: 0,
            y: 3,
            w: 5,
            h: 3
        },
        {
            i: 'songbook',
            x: 5,
            y: 0,
            w: 5,
            h: 6
        },
        {
            i: 'unknown',
            x: 0,
            y: 3,
            w: 10,
            h: 2
        }
    ],
    sm: [
        {
            i: 'metronome',
            x: 0,
            y: 0,
            w: 5,
            h: 3
        },
        {
            i: 'statistics',
            x: 0,
            y: 3,
            w: 5,
            h: 3
        },
        {
            i: 'songbook',
            x: 5,
            y: 0,
            w: 5,
            h: 6
        },
        {
            i: 'unknown',
            x: 0,
            y: 3,
            w: 10,
            h: 2
        }
    ],
    xs: [
        {
            i: 'metronome',
            x: 0,
            y: 0,
            w: 4,
            h: 3
        },
        {
            i: 'songbook',
            x: 0,
            y: 3,
            w: 4,
            h: 5
        },
        {
            i: 'statistics',
            x: 0,
            y: 8,
            w: 4,
            h: 3
        },
        {
            i: 'unknown',
            x: 0,
            y: 11,
            w: 4,
            h: 2
        }
    ]
};
