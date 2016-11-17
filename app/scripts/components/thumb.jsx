const React = require('react');
const Actions = require('../flux/actions');

const Thumb = React.createClass({
  render () {
    return (
      <li
        className="gallery__thumb"
        style={{ backgroundImage: 'url(' + this.url() + ')' }}
      >
        <a
          className="gallery__link"
          href={this.url('c')}
          onClick={this.handleClick}
          target="_blank"
        />
      </li>
    );
  },

  handleClick (e) {
    e.preventDefault();
    Actions.launchLightbox(this.url('c'));
  },

  url (size) {
    const photo = this.props.photo;
    const suffix = size ? ('_' + size) : '';

    return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server +
      '/' + photo.id + '_' + photo.secret + suffix + '.jpg';
  },
});

module.exports = Thumb;
