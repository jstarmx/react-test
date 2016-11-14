const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Component = require('../app/scripts/components/index');

exports.index = () => {
  return ReactDOMServer.renderToString(<Component />);
}
