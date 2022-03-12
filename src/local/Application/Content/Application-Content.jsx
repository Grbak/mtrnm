import React from 'react';
import {
    Responsive as ResponsiveGridLayout,
    WidthProvider
} from 'react-grid-layout';

// components
import { Widget } from 'global/Widget';
import { Metronome } from 'local/Metronome';

// const
import { cnApplicationContent } from '../Application.const';

// styles
import './Application-Content.css';

const GridLayout = WidthProvider(ResponsiveGridLayout);

export const ApplicationContent = () => {
    return (
        <div className={cnApplicationContent()}>
            <GridLayout
                isResizable={false}
                isDraggable={false}
                isBounded
                rowHeight={100}
                breakpoints={{
                    lg: 1200,
                    md: 996,
                    sm: 768,
                    xs: 480,
                    xxs: 0
                }}
                cols={{
                    lg: 12,
                    md: 10,
                    sm: 6,
                    xs: 4,
                    xxs: 2
                }}
                layouts={{
                    lg: [
                        {
                            i: 'a',
                            x: 0,
                            y: 0,
                            w: 6,
                            h: 2
                        },
                        {
                            i: 'b',
                            x: 0,
                            y: 3,
                            w: 6,
                            h: 2
                        },
                        {
                            i: 'c',
                            x: 6,
                            y: 0,
                            w: 6,
                            h: 3
                        }
                    ],
                    xs: [
                        {
                            i: 'a',
                            x: 0,
                            y: 0,
                            w: 4,
                            h: 2
                        },
                        {
                            i: 'b',
                            x: 0,
                            y: 2,
                            w: 4,
                            h: 2
                        },
                        {
                            i: 'c',
                            x: 0,
                            y: 6,
                            w: 4,
                            h: 3
                        }
                    ]
                }}
                margin={[24, 24]}
            >
                <div key="a">
                    <Widget title="Metronome">
                        <Metronome />
                    </Widget>
                </div>
                <div key="b">
                    <Widget title="Songbook" isClosed />
                </div>
                <div key="c">
                    <Widget title="Statistics" isClosed />
                </div>
            </GridLayout>
        </div>
    );
};
