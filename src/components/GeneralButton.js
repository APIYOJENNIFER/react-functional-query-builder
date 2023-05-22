import React from 'react';
import PropTypes from 'prop-types';

function GeneralButton(props) {
  const { className, buttonText } = props;

  return (
    <button className={className} type="button">
      {buttonText}
    </button>
  );
}
GeneralButton.propTypes = {
  className: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default GeneralButton;
