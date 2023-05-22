import React from 'react';
import PropTypes from 'prop-types';
import { comparisonOperators } from '../utils';

function Operator(props) {
  const { onOperatorChange } = props;
  const operatorList = comparisonOperators.map((item) => (
    <option key={item}>{item}</option>
  ));

  return (
    <select
      className="select-comparison-operator"
      onChange={(event) => onOperatorChange(event.target.value)}
    >
      {operatorList}
    </select>
  );
}

Operator.propTypes = {
  onOperatorChange: PropTypes.func.isRequired,
};

export default Operator;
