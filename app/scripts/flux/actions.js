const Dispatcher = require('./dispatcher');

module.exports = {
  launchLightbox: function (url) {
    Dispatcher.dispatch({
      action: 'LAUNCH_LIGHTBOX',
      url: url,
    });
  }
}
