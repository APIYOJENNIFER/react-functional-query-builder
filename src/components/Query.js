import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Logical from './Logical';
import GeneralButton from './GeneralButton';
import updateRulesList from '../helper';
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
      <Rule rulesList={rulesList} />
    </div>
  );
}

export default Query;
