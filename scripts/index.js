import 'babel-core/polyfill';
import '../utils/reset.css';
//import '../utils/base.css';
import './index.less';
import React from 'react';
import App from './App';

React.render(<App />, document.getElementById('root'));
