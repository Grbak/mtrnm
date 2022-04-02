import React, { FC, useState, useCallback } from 'react';
import { observer } from 'mobx-react';
import {
    Responsive as ResponsiveGridLayout,
    WidthProvider,
    Layout
} from 'react-grid-layout';

// components
import { Widget } from 'global/Widget';
import { Metronome } from 'local/Metronome';

// stores
import { GridStore, Breakpoint } from './Grid.store';

// const
import { columns, breakpoints } from './Grid.const';

const GridLayout = WidthProvider(ResponsiveGridLayout);

export const Grid: FC = observer(() => {
    const [store] = useState(new GridStore());

    const handleBreakpointChange = useCallback((breakpoint: Breakpoint) => {
        store.changeBreakpoint(breakpoint);
    }, []);

    const handleLayoutChange = useCallback(
        (layout: Layout[]) => store.changeLayout(layout),
        []
    );

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
            onBreakpointChange={handleBreakpointChange}
            onLayoutChange={handleLayoutChange}
        >
            <div key="metronome">
                <Widget title="Metronome">
                    <Metronome />
                </Widget>
            </div>
            <div key="songbook">
                <Widget title="Songbook" isClosed />
            </div>
            <div key="statistics">
                <Widget title="Statisctics" isClosed />
            </div>
            <div key="unknown">
                <Widget title="Something else" isClosed />
            </div>
        </GridLayout>
    );
});
