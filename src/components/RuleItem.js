import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
import Operator from './Operator';
import GeneralButton from './GeneralButton';
import Value from './Value';
import Error from './Error';

function RuleItem(props) {
  const {
    onFieldChange,
    onOperatorChange,
    onValueChange,
    onDelete,
    placeHolder,
    isValid,
    errorMessage,
    value,
  } = props;

  return (
    <div className="rule-item">
      <Field onFieldChange={onFieldChange} />
      <Operator onOperatorChange={onOperatorChange} />
      <div className="div-input-error">
        <div>
          <Value
            onValueChange={onValueChange}
            placeHolder={placeHolder}
            value={value}
          />
          <GeneralButton
            className="btn-delete-rule"
            buttonText="DELETE"
            onClick={onDelete}
          />
        </div>
        <Error isValid={isValid} errorMessage={errorMessage} />
      </div>
    </div>
  );
}

RuleItem.propTypes = {
  onFieldChange: PropTypes.func.isRequired,
  onOperatorChange: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  placeHolder: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default RuleItem;
