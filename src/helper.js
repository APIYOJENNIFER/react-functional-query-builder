import { nanoid } from 'nanoid';

const updateRulesList = (queryObject, rulesList) => {
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
export default updateRulesList;
