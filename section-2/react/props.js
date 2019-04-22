import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

class Greeting extends React.Component {
    render() {
      return (
        <h1>Hello, {this.props.name}</h1>
      );
    }
  }
  
  // Specifies the default values for props:
  Greeting.defaultProps = {
    name: 'Stranger'
  };

  Greeting.propTypes = {
      name: PropTypes.string.isRequired
  }
  
  // Renders "Hello, Stranger":
  ReactDOM.render(
    <Greeting />,
    document.getElementById('example')
  );