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

  return { queryObject, updatedRules };
};
