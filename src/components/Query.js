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

  const handleLogicalChange = (event) => {
    setQueryObject({ ...queryObject, combinator: event });
  };

  const addRule = () => {
    const updatedRulesList = updateRulesList(queryObject);
    setQueryObject({ ...queryObject, rules: updatedRulesList.updatedRules });
  };

  const handleFieldChange = (event, idx) => {
    const placeHolder = changeInputPlaceHolder(event);
    setQueryObject({
      ...queryObject,
      rules: queryObject.rules.map((rule) =>
        rule.id === idx
          ? {
              ...rule,
              field: event,
              placeHolder,
              isValid: true,
              errorMessage: '',
              value: '',
            }
          : rule
      ),
    });
  };

  const handleOperatorChange = (event, idx) => {
    setQueryObject({
      ...queryObject,
      rules: queryObject.rules.map((rule) =>
        rule.id === idx ? { ...rule, operator: event } : rule
      ),
    });
  };

  const handleValueChange = (event, idx) => {
    const validationResult = validateInput(queryObject, event, idx);

    setQueryObject({
      ...queryObject,
      rules: queryObject.rules.map((rule) =>
        rule.id === idx
          ? {
              ...rule,
              value: event,
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
