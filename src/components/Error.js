import React from 'react';
import PropTypes from 'prop-types';

function Error(props) {
  const { isValid, errorMessage } = props;

  return !isValid && <small className="error-output">{errorMessage}</small>;
}
Error.propTypes = {
  isValid: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
};
export default Error;
