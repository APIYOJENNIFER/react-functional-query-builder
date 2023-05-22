import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
import Operator from './Operator';
import GeneralButton from './GeneralButton';
import Value from './Value';

function RuleItem(props) {
  const {
    onFieldChange, onOperatorChange, onValueChange, onDelete,
  } = props;

  return (
    <div>
      <Field onFieldChange={onFieldChange} />
      <Operator onOperatorChange={onOperatorChange} />
      <Value onValueChange={onValueChange} />
      <GeneralButton
        className="btn-delete-rule"
        buttonText="DELETE"
        onClick={onDelete}
      />
    </div>
  );
}

RuleItem.propTypes = {
  onFieldChange: PropTypes.func.isRequired,
  onOperatorChange: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default RuleItem;
