const React = require('react');
const ReactDOM = require('react-dom');
const Gallery = require('./components/gallery');
const Lightbox = require('./components/lightbox');
const photoset = require('./stores/photoset');

photoset.set(window.__PRELOADED_STATE__);

ReactDOM.render(<Gallery photos={photoset.get()} />, document.getElementById('gallery'));
ReactDOM.render(<Lightbox />, document.getElementById('lightbox'));
