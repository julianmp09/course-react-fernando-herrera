import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './HelloWorldApp';
// import { FirstApp } from './components/FirstApp';
import "./styles.css"
import CounterApp from './components/CounterApp';



ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <App/>
        <CounterApp value={0}/>
    </React.StrictMode>
)

