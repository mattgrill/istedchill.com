import React from 'react';
import { render } from 'react-dom';

import App from './components/app';

import status from '../status';

render(<App status={status} />, document.getElementById('root'));
