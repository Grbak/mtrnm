import React from 'react';
import ReactDOM from 'react-dom';

// yandex-ui
import { configureRootTheme } from '@yandex/ui/Theme';
import { theme } from '@yandex/ui/Theme/presets/default';

// styles
import './index.css';

// components
import { Application } from 'local/Application';

configureRootTheme({ theme });

const root = document.getElementById('root');
ReactDOM.render(<Application />, root);
