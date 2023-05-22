import React from 'react';
import Logical from './Logical';
import GeneralButton from './GeneralButton';

function Query() {
  return (
    <div className="App">
      <div className="App-heading">
        <h2>React Query Builder</h2>
      </div>
      <hr />
      <div className="App-top-section">
        <Logical />
        <GeneralButton className="btn-add-rule" buttonText="ADD RULE" />
      </div>
    </div>
  );
}

export default Query;
