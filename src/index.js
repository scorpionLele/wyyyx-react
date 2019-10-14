import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import 'lib-flexible';

import App from './App';
import store from "./redux/store";
import "./mockData/mockServer";


ReactDOM.render(
  <Provider store={store}>
    < App/>
  </Provider>, 
document.getElementById('root')
);