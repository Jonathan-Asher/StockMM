import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Symbol from './Symbol';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: 'asd'  
    };
  }

  componentDidMount() {
    axios.get(this.props.url).then(data => this.setState({data: data.data['Time Series (Digital Currency Daily)']}));
  }

  render() { 
    return <React.Fragment>
      <h2>a</h2>
      <Symbol data={ this.state.data } />
    </React.Fragment>;
  }
}

App.propTypes = {
  url: PropTypes.string,
};
 
export default App;