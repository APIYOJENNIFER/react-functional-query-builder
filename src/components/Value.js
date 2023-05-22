import React from 'react';
import PropTypes from 'prop-types';

function Value(props) {
  const { onValueChange, placeHolder } = props;

  return (
    <input
      className="input-value"
      placeholder={placeHolder}
      onChange={(event) => onValueChange(event.target.value)}
    />
  );
}

Value.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  placeHolder: PropTypes.string.isRequired,
};

export default Value;
