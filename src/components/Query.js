import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Logical from './Logical';
import GeneralButton from './GeneralButton';
import { updateRulesList, onEventChange, deleteRule } from '../helper';
import Rule from './Rule';

function Query() {
  const [queryObject, setQueryObject] = useState({
    id: nanoid(),
    combinator: 'AND',
    rules: [],
  });
  const [rulesList, setRulesList] = useState([]);

  const handleLogicalChange = (event) => {
    setQueryObject({ ...queryObject, combinator: event });
  };

  const addRule = () => {
    const updatedRulesList = updateRulesList(queryObject, rulesList);
    setQueryObject({ ...queryObject, rules: updatedRulesList.updatedRules });
    setRulesList(updatedRulesList.rulesList);
  };

  const handleEventChange = (key, event, idx) => {
    const eventResult = onEventChange(queryObject, key, event, idx);

    setQueryObject({
      ...queryObject,
      rules: eventResult.updatedRules,
    });
  };

  const handleFieldChange = (event, idx) => {
    handleEventChange('field', event, idx);
  };

  const handleOperatorChange = (event, idx) => {
    handleEventChange('operator', event, idx);
  };

  const handleValueChange = (event, idx) => {
    handleEventChange('value', event, idx);
  };

  const handleDelete = (id) => {
    const deleteResult = deleteRule(queryObject, rulesList, id);

    setQueryObject({
      ...queryObject,
      rules: deleteResult.filteredRules,
    });
    setRulesList(deleteResult.updatedRulesList);
  };

  return (
    <div className="App">
      <div className="App-heading">
        <h2>React Query Builder</h2>
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
      <Rule
        rulesList={rulesList}
        onFieldChange={handleFieldChange}
        onOperatorChange={handleOperatorChange}
        onValueChange={handleValueChange}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Query;
