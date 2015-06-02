require('babel-core/polyfill');

const React = require('react');
const App = require('./App');
require('../utils/reset.css');
require('../utils/base.css');

React.render(<App />, document.getElementById('root'));
