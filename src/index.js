import React from 'react';
import ReactDOM from 'react-dom';
import './css/Flex.css';
import './css/App.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import CocktailBar from './CocktailBar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CocktailBar />, document.getElementById('root'));
registerServiceWorker();
