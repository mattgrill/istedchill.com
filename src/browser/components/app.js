import React from 'react';
import PropTypes from 'prop-types';

const App = ({ status }) => (<h1>{status}</h1>);

App.propTypes = {
  status: PropTypes.string.isRequired,
};

export default App;
