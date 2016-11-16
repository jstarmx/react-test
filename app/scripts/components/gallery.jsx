const React = require('react');

const Gallery = React.createClass({
  render() {
    return (
      <div>
        {this.props.photoset.map((photo, i) => {
          return (
            <img src={this.url(photo)} key={i} />
          );
        })}
      </div>
    );
  },

  handleClick() {
    alert('clicked!!!');
  },

  url(photo) {
    return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server +
      '/' + photo.id + '_' + photo.secret + '.jpg';
  },
});

module.exports = Gallery;
