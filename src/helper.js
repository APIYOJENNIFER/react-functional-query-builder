import { nanoid } from 'nanoid';

export const updateRulesList = (queryObject, rulesList) => {
  const ruleObject = {
    id: nanoid(),
    field: 'First Name',
    operator: '=',
    value: '',
  };
  queryObject.rules.push(ruleObject);
  const { id: idx } = queryObject.rules[queryObject.rules.length - 1];
  rulesList.push({
    id: idx,
    placeHolder: 'E.g John',
  });

  const updatedRules = queryObject.rules;

  return {
    rulesList,
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

export const deleteRule = (queryObject, rulesList, id) => {
  const updatedRulesList = rulesList.filter((item) => item.id !== id);
  const newQueryObject = queryObject;
  const filteredRules = newQueryObject.rules.filter((rule) => rule.id !== id);

  newQueryObject.rules = filteredRules;

  return {
    updatedRulesList,
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
