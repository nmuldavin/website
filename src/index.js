import React from 'react';
import ReactDOM from 'react-dom';

const App = (
  <div>
    Hello I am your website!
  </div>
);

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  App,
  MOUNT_NODE,
);
