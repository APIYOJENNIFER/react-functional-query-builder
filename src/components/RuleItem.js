import React from 'react';
import Field from './Field';
import Operator from './Operator';
import GeneralButton from './GeneralButton';
import Value from './Value';

function RuleItem() {
  return (
    <div>
      <Field />
      <Operator />
      <Value />
      <GeneralButton className="btn-delete-rule" buttonText="DELETE" />
    </div>
  );
}

export default RuleItem;
