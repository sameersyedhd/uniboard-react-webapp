import './css/tailwind.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.css';
import Login from './Login';
import registerServiceWorker from './registerServiceWorker';
import Data from "./data";

ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();
