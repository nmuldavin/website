import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import './styles/global.scss';

const App = (
  <BrowserRouter history={history}>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/other" component={() => <div>Taco</div>} />
    </div>
  </BrowserRouter>
);

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  App,
  MOUNT_NODE,
);
