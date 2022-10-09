import React, { FC } from 'react';

// components
import { Grid } from 'local/Grid';

// const
import { cnApplicationContent } from '../Application.const';

// styles
import './Application-Content.css';

export const ApplicationContent: FC = () => {
    return (
        <div className={cnApplicationContent()}>
            <Grid />
        </div>
    );
};
