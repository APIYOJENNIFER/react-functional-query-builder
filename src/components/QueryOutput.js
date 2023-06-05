import React from 'react';
import PropTypes from 'prop-types';
import { filterObject } from '../helper';

function QueryOutput(props) {
  const { queryObject } = props;

  const object = filterObject(queryObject);

  return (
    <div>
      <h3 className="json">JSON</h3>
      <pre className="query-output">{JSON.stringify(object, null, 2)}</pre>
    </div>
  );
}
QueryOutput.propTypes = {
  queryObject: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default QueryOutput;
