import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../pages/404';
import Home from '../pages/Home';
import Questions from '../pages/Questions';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/questions' component={Questions} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
