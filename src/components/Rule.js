import React from 'react';
import PropTypes from 'prop-types';
import RuleItem from './RuleItem';

function Rule(props) {
  const { rulesList } = props;

  return rulesList.map((item) => <RuleItem key={item.id} />);
}
Rule.propTypes = {
  rulesList: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default Rule;
