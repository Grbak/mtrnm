import { makeAutoObservable } from 'mobx';
import { ReactNode } from 'react';
import { Layout } from 'react-grid-layout';

// const
import { initialLayouts } from './Grid.const';

export type Widget = 'metronome' | 'songbook' | 'statistics' | 'unknown';
export type WidgetData = {
    id: Widget;
    title: string;
    content: ReactNode;
    closed?: boolean;
};

// type Breakpoint = 'lg' | 'md' | 'sm' | 'xs' | 'xxs';
export type Breakpoint = 'lg' | 'xs';

type Layouts = {
    [key in Breakpoint]: Layout[];
};

export class GridStore {
    constructor() {
        makeAutoObservable(this);
    }

    layouts: Layouts = initialLayouts;

    currentBreakpoint: Breakpoint = 'lg';

    draggableWidget: Widget | null = null;

    setDraggableWidget = (value: Widget | null) => {
        this.draggableWidget = value;
        console.log(this.draggableWidget);
    };

    changeBreakpoint = (value: Breakpoint): void => {
        this.currentBreakpoint = value;
    };

    stopDrag = (value: Layout[]): void => {
        this.layouts[this.currentBreakpoint] = value;
        this.draggableWidget = null;
    };
}
