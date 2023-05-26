import React from 'react';
import PropTypes from 'prop-types';
import { logicalOperators } from '../utils';

function Logical(props) {
  const logicalList = logicalOperators.map((item) => (
    <option key={item}>{item}</option>
  ));

  const { onLogicalChange } = props;

  return (
    <select
      className="logical-select"
      onChange={(event) => onLogicalChange(event.target.value)}
    >
      {logicalList}
    </select>
  );
}
Logical.propTypes = {
  onLogicalChange: PropTypes.func.isRequired,
};
export default Logical;
