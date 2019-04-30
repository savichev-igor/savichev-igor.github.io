import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/index.jsx';

import './html/index.html';
import './favicon.png';

ReactDOM.render(
    <App/>,
    document.getElementById('mount')
);
