import React from 'react';

const Component = React.createClass({
  render() {
    return (
      <div>
        <p onClick={this.handleClick}>I'm from the server</p>
      </div>
    );
  },

  handleClick() {
    alert('clicked!!!');
  },
});

module.exports = Component;
