import { observable, action } from 'mobx';

// const
import { initialLayouts } from './Grid.const';

// type Breakpoint = 'lg' | 'md' | 'sm' | 'xs' | 'xxs';
export type Breakpoint = 'lg' | 'xs';

type Layout = {
    i: string;
    x: number;
    y: number;
    w: number;
    h: number;
};

type Layouts = {
    [key in Breakpoint]: Layout[];
};

export class GridStore {
    @observable
    layouts: Layouts = initialLayouts;

    @observable
    currentBreakpoint: Breakpoint = 'lg';

    @action
    changeBreakpoint = (value: Breakpoint): void => {
        this.currentBreakpoint = value;
        console.log(this.currentBreakpoint);
    };

    @action
    changeLayout = (value: Layout[]): void => {
        // this.layouts[this.currentBreakpoint] = value;
        // console.log(this.layouts[this.currentBreakpoint][0]);
    };
}
