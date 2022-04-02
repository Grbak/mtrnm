import { action, makeObservable, observable, toJS } from 'mobx';
import { ReactNode } from 'react';
import { Layout } from 'react-grid-layout';

// const
import { initialLayouts } from './Grid.const';

export type Widget = 'metronome' | 'songbook' | 'statistics' | 'unknown';
export type WidgetData = {
    id: Widget;
    title: string;
    content: ReactNode;
    isClosed?: boolean;
};

// type Breakpoint = 'lg' | 'md' | 'sm' | 'xs' | 'xxs';
export type Breakpoint = 'lg' | 'xs';

type Layouts = {
    [key in Breakpoint]: Layout[];
};

export class GridStore {
    constructor() {
        makeObservable(this, {
            layouts: observable.deep,
            currentBreakpoint: observable,
            draggableWidget: observable,
            setDraggableWidget: action,
            changeBreakpoint: action,
            stopDrag: action
        });
    }

    layouts: Layouts = initialLayouts;

    currentBreakpoint: Breakpoint = 'lg';

    draggableWidget: Widget | null = null;

    setDraggableWidget = (value: Widget) => {
        // const requiredLayout = this.layouts[this.currentBreakpoint].find(
        //     (layout: Layout) => layout.i === value
        // );
        // if (requiredLayout) {
        //     requiredLayout.isDraggable = true;
        //     this.draggableWidget = value;
        // }
        // console.log(toJS(requiredLayout));
    };

    changeBreakpoint = (value: Breakpoint): void => {
        this.currentBreakpoint = value;
    };

    stopDrag = (value: Layout[]): void => {
        // this.draggableWidget = null;
        // const requiredLayout = this.layouts[this.currentBreakpoint].find(
        //     (layout: Layout) => layout.i === this.draggableWidget
        // );
        // if (requiredLayout) {
        //     requiredLayout.isDraggable = false;
        // }
        this.layouts[this.currentBreakpoint] = value;
    };
}
