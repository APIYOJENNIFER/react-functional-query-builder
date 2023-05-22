import React from 'react';
import PropTypes from 'prop-types';

function Value(props) {
  const { onValueChange } = props;

  return (
    <input
      className="input-value"
      onChange={(event) => onValueChange(event.target.value)}
    />
  );
}

Value.propTypes = {
  onValueChange: PropTypes.func.isRequired,
};

export default Value;
