import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Logical from './Logical';
import GeneralButton from './GeneralButton';
import {
  updateRulesList,
  deleteRule,
  changeInputPlaceHolder,
  validateInput,
} from '../helper';
import Rule from './Rule';
import QueryOutput from './QueryOutput';

function Query() {
  const [queryObject, setQueryObject] = useState({
    id: nanoid(),
    combinator: 'AND',
    rules: [],
  });

  const handleLogicalChange = (logical) => {
    setQueryObject({ ...queryObject, combinator: logical });
  };

  const addRule = () => {
    const updatedRulesList = updateRulesList(queryObject);
    setQueryObject({ ...queryObject, rules: updatedRulesList.updatedRules });
  };

  const handleFieldChange = (field, idx) => {
    const placeHolder = changeInputPlaceHolder(field);
    setQueryObject({
      ...queryObject,
      rules: queryObject.rules.map((rule) =>
        rule.id === idx
          ? {
              ...rule,
              field,
              placeHolder,
              isValid: true,
              errorMessage: '',
              value: '',
            }
          : rule
      ),
    });
  };

  const handleOperatorChange = (operator, idx) => {
    setQueryObject({
      ...queryObject,
      rules: queryObject.rules.map((rule) =>
        rule.id === idx ? { ...rule, operator } : rule
      ),
    });
  };

  const handleValueChange = (value, idx) => {
    const validationResult = validateInput(queryObject, value, idx);

    setQueryObject({
      ...queryObject,
      rules: queryObject.rules.map((rule) =>
        rule.id === idx
          ? {
              ...rule,
              value,
              isValid: validationResult.isValid,
              errorMessage: validationResult.errorMessage,
            }
          : rule
      ),
    });
  };

  const handleDelete = (id) => {
    const deleteResult = deleteRule(queryObject, id);

    setQueryObject({
      ...queryObject,
      rules: deleteResult.filteredRules,
    });
  };

  return (
    <div className="App">
      <div className="App-heading">
        <h2>React Query Builder - Functional Components</h2>
      </div>
      <hr />
      <div className="App-top-section">
        <Logical onLogicalChange={(event) => handleLogicalChange(event)} />
        <GeneralButton
          className="btn-add-rule"
          buttonText="ADD RULE"
          onClick={addRule}
        />
      </div>
      <div className="rules">
        <Rule
          rules={queryObject.rules}
          onFieldChange={handleFieldChange}
          onOperatorChange={handleOperatorChange}
          onValueChange={handleValueChange}
          onDelete={handleDelete}
        />
      </div>
      <QueryOutput queryObject={queryObject} />
    </div>
  );
}

export default Query;
