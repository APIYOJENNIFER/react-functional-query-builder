import React from 'react';
import logicalOperators from '../utils';

function Logical() {
  const logicalList = logicalOperators.map((item) => (
    <option key={item}>{item}</option>
  ));

  return <select className="logical-select">{logicalList}</select>;
}
export default Logical;
