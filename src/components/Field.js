import React from 'react';
import { studentsField } from '../utils';

function Field() {
  const fieldList = studentsField.map((item) => (
    <option key={item}>{item}</option>
  ));

  return <select className="select-student-info">{fieldList}</select>;
}

export default Field;
