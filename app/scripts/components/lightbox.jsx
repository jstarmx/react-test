const React = require('react');
const Dispatcher = require('../flux/dispatcher');

const Lightbox = React.createClass({
  getInitialState () {
    return {
      url: '',
    }
  },

  render () {
    return (
      <div>{this.state.url}</div>
    );
  },

  componentDidMount () {
    Dispatcher.register((payload) => {
      if (payload.action === 'LAUNCH_LIGHTBOX') {
        this.setState({
          url: payload.url
        });
      }
    });
  },
});

module.exports = Lightbox;
