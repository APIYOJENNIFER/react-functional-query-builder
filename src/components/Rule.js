import React from 'react';
import PropTypes from 'prop-types';
import RuleItem from './RuleItem';

function Rule(props) {
  const { rulesList, onFieldChange } = props;

  return rulesList.map((item) => (
    <RuleItem
      key={item.id}
      onFieldChange={(event) => onFieldChange(event, item.id)}
    />
  ));
}
Rule.propTypes = {
  rulesList: PropTypes.oneOfType([PropTypes.array]).isRequired,
  onFieldChange: PropTypes.func.isRequired,
};

export default Rule;
