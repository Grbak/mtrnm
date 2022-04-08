import React, { FC, useState, useCallback, useMemo, MouseEvent } from 'react';
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
import { cnGrid, columns, breakpoints } from './Grid.const';

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
                closed: true
            },
            {
                id: 'songbook',
                title: 'Songbook',
                content: <div />
            },
            {
                id: 'unknown',
                title: 'Unknown',
                content: <div />,
                closed: true
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
                onMouseDown={(event: MouseEvent) => {
                    if (data.id !== store.draggableWidget) {
                        console.log(event);
                        event.preventDefault();
                        store.setDraggableWidget(null);
                    }
                }}
                closed={data.closed}
                draggable={store.draggableWidget === data.id}
                blurred={Boolean(
                    store.draggableWidget && store.draggableWidget !== data.id
                )}
            >
                {data.content}
            </Widget>
        </div>
    ));

    return (
        <GridLayout
            className={cnGrid({ draggable: Boolean(store.draggableWidget) })}
            isResizable={false}
            isDraggable={Boolean(store.draggableWidget)}
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
