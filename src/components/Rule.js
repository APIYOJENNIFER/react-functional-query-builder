import React from 'react';
import PropTypes from 'prop-types';
import RuleItem from './RuleItem';

function Rule(props) {
  const {
    rulesList, onFieldChange, onOperatorChange, onValueChange,
  } = props;

  return rulesList.map((item) => (
    <RuleItem
      key={item.id}
      onFieldChange={(event) => onFieldChange(event, item.id)}
      onOperatorChange={(event) => onOperatorChange(event, item.id)}
      onValueChange={(event) => onValueChange(event, item.id)}
    />
  ));
}
Rule.propTypes = {
  rulesList: PropTypes.oneOfType([PropTypes.array]).isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onOperatorChange: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

export default Rule;
