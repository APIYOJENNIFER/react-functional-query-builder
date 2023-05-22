import React from 'react';
import PropTypes from 'prop-types';

function GeneralButton(props) {
  const { className, buttonText, onClick } = props;

  return (
    <button className={className} type="button" onClick={onClick}>
      {buttonText}
    </button>
  );
}
GeneralButton.propTypes = {
  className: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GeneralButton;
