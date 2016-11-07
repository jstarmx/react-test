import React from 'react';
import {render} from 'react-dom';

const App = React.createClass({
  render() {
    return (
      <div>
        <p>Yo React!!!!</p>
      </div>
    );
  }
});

render(<App/>, document.getElementById('app'));
