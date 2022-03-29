import React, { FC, useState } from 'react';
import { observer } from 'mobx-react';
import {
    Responsive as ResponsiveGridLayout,
    WidthProvider
} from 'react-grid-layout';

// components
import { Widget } from 'global/Widget';
import { Metronome } from 'local/Metronome';

// stores
import { GridStore } from './Grid.store';

// const
import { columns, breakpoints } from './Grid.const';

const GridLayout = WidthProvider(ResponsiveGridLayout);

export const Grid: FC = observer(() => {
    const [store] = useState(new GridStore());
    return (
        <GridLayout
            isResizable={false}
            isDraggable
            isBounded
            rowHeight={100}
            breakpoints={breakpoints}
            cols={columns}
            layouts={store.layouts}
            margin={[24, 24]}
            onBreakpointChange={(breakpoint: string, cols: number) => {
                console.log(breakpoint, cols);
            }}
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
    );
});
