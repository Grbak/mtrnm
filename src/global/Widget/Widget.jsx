import React from 'react';

// const
import { cnWidget, cnWidgetHeader, cnWidgetHeaderAddon } from './Widget.const';

// styles
import './Widget.css';

export const Widget = ({ children, title, className }) => {
	return (
		<div className={cnWidget(null, [className])}>
			<div className={cnWidgetHeader()}>
				{title}
				<div className={cnWidgetHeaderAddon()}>
                    Addon
				</div>
			</div>
			{children}
		</div>
	);
};
