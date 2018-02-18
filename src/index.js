import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/Flex.css';
import './css/App.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
