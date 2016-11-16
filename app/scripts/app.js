const React = require('react');
const ReactDOM = require('react-dom');
const Gallery = require('./components/gallery');
const preloadedState = window.__PRELOADED_STATE__;

ReactDOM.render(<Gallery photoset={preloadedState} />, document.getElementById('gallery'));
