import React from 'react';
import { Responsive as ResponsiveGridLayout, WidthProvider } from 'react-grid-layout';

// const
import { cnApplicationContent } from '../Application.const';

// components
import { Widget } from './Widget/Widget';

// styles
import './Application-Content.css'
import '../../../../node_modules/react-grid-layout/css/styles.css';
import '../../../../node_modules/react-resizable/css/styles.css';

const GridLayout = WidthProvider(ResponsiveGridLayout);

export const ApplicationContent = () => {
    return (
        <div className={cnApplicationContent()}>
            <GridLayout
                isResizable={false}
                isBounded
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                layouts={{
                    lg: [
                        { i: "a", x: 0, y: 0, w: 6, h: 2 },
                        { i: "b", x: 0, y: 3, w: 6, h: 1 },
                        { i: "c", x: 6, y: 0, w: 6, h: 3 }
                    ],
                    xs: [
                        {i: "a", x: 0, y: 0, w: 2, h: 2},
                        {i: "b", x: 0, y: 2, w: 3, h: 2},
                        {i: "c", x: 6, y: 6, w: 1, h: 4 }
                        ]
                }}
                margin={[16, 16]}
            >
                <div key="a">
                    <Widget>
                        a
                    </Widget>
                </div>
                <div key="b">
                    <Widget>
                        b
                    </Widget>
                </div>
                <div key="c">
                    <Widget>
                        c
                    </Widget>
                </div>
            </GridLayout>
        </div>
    )
}