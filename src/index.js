import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}><App /></BrowserRouter>,
     document.getElementById('root'));
registerServiceWorker();
