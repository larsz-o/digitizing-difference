import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Stories from './components/Stories/Stories'; 
import Praxis from './components/Praxis/Praxis'; 
import Resources from './components/Resources/Resources'; 

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/stories" component={Stories} />
            <Route exact path="/praxis" component={Praxis} />
            <Route exact path="/resources" component={Resources} />
            <Route render={() => <h1>404: Page not found</h1>} />
          </Switch>
        </Router>
      </div>

    );
  }
}

export default App;
