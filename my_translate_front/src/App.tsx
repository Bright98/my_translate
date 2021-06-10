import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { TranslatePage, LeitnerPage } from './pages';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TranslatePage} />
          <Route exact path="/leitner" component={LeitnerPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
