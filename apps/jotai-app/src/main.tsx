import React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
// @ts-expect-error https://github.com/reactwg/react-18/discussions/5
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
