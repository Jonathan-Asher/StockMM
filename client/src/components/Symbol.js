import React from 'react';
import PropTypes from 'prop-types';

import Graph from './Graph';

function Symbol(props) {
  return ( <Graph { ...props } /> );
}

Symbol.propTypes = {
  data: PropTypes.object
};

 
export default Symbol;