import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "./scss/app.scss";

// Rdux
import {Provider} from "react-redux"
import store from "../redux/store"

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
