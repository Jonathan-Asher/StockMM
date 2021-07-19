import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Home from './Home';
import Symbol from './Symbol';
import Navbar from './Navbar';
import SymbolList from './SymbolList';
import {  Route, Switch } from 'react-router-dom';

class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="App">
      <Navbar />
      <div className="currentApp container">
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/cryptocurrencies" exact>
            <SymbolList />
          </Route>
          <Route path="/cryptocurrencies/:symbol" component={Symbol}/>
        </Switch>
      </div>
    </div>;
  }
}

App.propTypes = {
  options: PropTypes.object.isRequired,
};
 
export default App;