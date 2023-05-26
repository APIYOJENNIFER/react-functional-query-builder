import React from 'react';
import PropTypes from 'prop-types';
import RuleItem from './RuleItem';

function Rule(props) {
  const { rules, onFieldChange, onOperatorChange, onValueChange, onDelete } =
    props;

  return rules.map((item) => (
    <RuleItem
      key={item.id}
      onFieldChange={(event) => onFieldChange(event, item.id)}
      onOperatorChange={(event) => onOperatorChange(event, item.id)}
      onValueChange={(event) => onValueChange(event, item.id)}
      onDelete={() => onDelete(item.id)}
      placeHolder={item.placeHolder}
      isValid={item.isValid}
      errorMessage={item.errorMessage}
      value={item.value}
    />
  ));
}
Rule.propTypes = {
  rules: PropTypes.oneOfType([PropTypes.array]).isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onOperatorChange: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Rule;
