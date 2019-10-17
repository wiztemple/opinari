// react libraries
import * as React from 'react';

// third party packages
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Feeds from '../pages/Feeds';

// import CreatePost from '../components/CreatePost'
// import NotFound from '../pages/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route exact path="/feeds" component={Feeds} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
