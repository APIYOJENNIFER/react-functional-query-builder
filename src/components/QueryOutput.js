import React from 'react';
import PropTypes from 'prop-types';

function QueryOutput(props) {
  const { queryObject } = props;

  return (
    <div>
      <h3 className="json">JSON</h3>
      <pre className="query-output">{JSON.stringify(queryObject, null, 2)}</pre>
    </div>
  );
}
QueryOutput.propTypes = {
  queryObject: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default QueryOutput;
