const React = require('react');
const Thumb = require('./thumb');

const Gallery = React.createClass({
  render () {
    return (
      <ul className="gallery">
        {this.props.photos.map((photo) => {
          return <Thumb photo={photo} key={photo.id} />;
        })}
      </ul>
    );
  },
});

module.exports = Gallery;
