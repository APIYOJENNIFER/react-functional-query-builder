import React from 'react';
import PropTypes from 'prop-types';
import { studentsField } from '../utils';

function Field(props) {
  const { onFieldChange } = props;
  const fieldList = studentsField.map((item) => (
    <option key={item}>{item}</option>
  ));

  return (
    <select
      className="select-student-info"
      onChange={(event) => onFieldChange(event.target.value)}
    >
      {fieldList}
    </select>
  );
}
Field.propTypes = {
  onFieldChange: PropTypes.func.isRequired,
};

export default Field;
