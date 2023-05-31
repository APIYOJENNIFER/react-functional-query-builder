import { nanoid } from 'nanoid';

export const updateRulesList = (queryObject) => {
  const ruleObject = {
    id: nanoid(),
    field: 'First Name',
    operator: '=',
    value: '',
    placeHolder: 'E.g John',
    isValid: true,
    errorMessage: '',
  };
  queryObject.rules.push(ruleObject);

  const updatedRules = queryObject.rules;

  return {
    updatedRules,
  };
};

export const onEventChange = (queryObject, key, event, idx) => {
  queryObject.rules.forEach((rule) => {
    if (rule.id === idx) {
      const currentRule = rule;
      currentRule[key] = event.trim();
    }
  });
  const updatedRules = queryObject.rules;

  return { updatedRules };
};

export const deleteRule = (queryObject, id) => {
  const newQueryObject = queryObject;
  const filteredRules = newQueryObject.rules.filter((rule) => rule.id !== id);

  newQueryObject.rules = filteredRules;

  return {
    filteredRules,
  };
};

export const changeInputPlaceHolder = (event) => {
  let placeHolder = '';
  if (event === 'First Name') {
    placeHolder = 'E.g John';
  }
  if (event === 'Last Name') {
    placeHolder = 'E.g Doe';
  }
  if (event === 'Age') {
    placeHolder = 'E.g 10';
  }
  if (event === 'Level') {
    placeHolder = 'E.g 1289';
  }
  if (event === 'Enrollment Year') {
    placeHolder = 'E.g 2021';
  }

  return placeHolder;
};

const validateName = (inputString) => {
  const reg = /^[\p{L}]+$/u;
  const isValid = reg.test(inputString);

  return isValid;
};

const validateAge = (inputString) => {
  const reg = /^(?:[0-9]|[1-9][0-9]|1[0-2][0-9]|130)$/;
  const isValid = reg.test(inputString);

  return isValid;
};

const validateLevel = (inputString) => {
  const reg = /^[0-9]{1,6}$/;
  const isValid = reg.test(inputString);

  return isValid;
};

const validateEnrollmentYear = (inputString) => {
  const reg = /^(?!0)[0-9]{4}$/;
  const isValid = reg.test(inputString);

  return isValid;
};

export const validateInput = (queryObject, event, idx) => {
  let isValid = true;
  let errorMessage = '';

  queryObject.rules.forEach((rule) => {
    if (rule.id === idx) {
      const currentRule = rule;
      if (
        currentRule.field === 'First Name' ||
        currentRule.field === 'Last Name'
      ) {
        isValid = validateName(event);
        errorMessage = 'Name should contain alphabetical characters only';
      }

      if (currentRule.field === 'Age') {
        isValid = validateAge(event);
        errorMessage = 'Please enter a valid age using digits only';
      }

      if (currentRule.field === 'Level') {
        isValid = validateLevel(event);
        errorMessage =
          'Level should contain digits only, not exceeding six digits';
      }

      if (currentRule.field === 'Enrollment Year') {
        isValid = validateEnrollmentYear(event);
        errorMessage = 'Please enter a valid year using digits only';
      }
    }
  });

  return { isValid, errorMessage };
};

export const filterObject = (queryObject) => {
  const filteredObject = {
    ...queryObject,
    rules: queryObject.rules.map(({ id, field, operator, value }) => ({
      id,
      field,
      operator,
      value,
    })),
  };

  return { filteredObject };
};
