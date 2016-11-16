const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Gallery = require('../app/scripts/components/gallery');

exports.index = (data) => {
  return ReactDOMServer.renderToString(<Gallery photoset={data} />);
}
