import React, { FC, useState, useCallback, useMemo } from 'react';
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
import {
    GridStore,
    Breakpoint,
    WidgetData,
    Widget as WidgetType
} from './Grid.store';

// const
import { columns, breakpoints } from './Grid.const';

const GridLayout = WidthProvider(ResponsiveGridLayout);

export const Grid: FC = observer(() => {
    const [store] = useState(new GridStore());

    const handleBreakpointChange = useCallback((breakpoint: Breakpoint) => {
        store.changeBreakpoint(breakpoint);
    }, []);

    const handleDragStop = useCallback(
        (layout: Layout[]) => store.stopDrag(layout),
        []
    );

    const handleWidgetMove = useCallback(
        (widget: WidgetType) => () => store.setDraggableWidget(widget),
        []
    );

    const widgetData: WidgetData[] = useMemo(
        () => [
            {
                id: 'metronome',
                title: 'Metronome',
                content: <Metronome />
            },
            {
                id: 'statistics',
                title: 'Statistics',
                content: <div />,
                isClosed: true
            },
            {
                id: 'songbook',
                title: 'Songbook',
                content: <div />
                // isClosed: true
            },
            {
                id: 'unknown',
                title: 'Unknown',
                content: <div />,
                isClosed: true
            }
        ],
        []
    );

    const widgetElements = widgetData.map((data: WidgetData) => (
        <div key={data.id}>
            <Widget
                title={data.title}
                onMove={handleWidgetMove(data.id)}
                onHide={() => console.log(`widget ${data.id} is hidden`)}
                isClosed={data.isClosed}
            >
                {data.content}
            </Widget>
        </div>
    ));

    return (
        <GridLayout
            isResizable={false}
            // isDraggable={Boolean(store.draggableWidget)}
            isBounded
            rowHeight={100}
            breakpoints={breakpoints}
            cols={columns}
            layouts={store.layouts}
            margin={[24, 24]}
            onBreakpointChange={handleBreakpointChange}
            onDragStop={handleDragStop}
        >
            {widgetElements}
        </GridLayout>
    );
});
