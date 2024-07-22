const router = require('express').Router();
let Rule = require('../models/rule.model');

router.route('/').get((req, res) => {
  Rule.find()
    .then(rules => res.json(rules))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const ruleString = req.body.ruleString;

  const newRule = new Rule({
    name,
    ruleString,
  });

  newRule.save()
    .then(() => res.json('Rule added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/evaluate').post((req, res) => {
  const userData = req.body.userData;
  
  Rule.find()
    .then(rules => {
      const result = evaluateRules(rules, userData);
      res.json({ result });
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

function evaluateRules(rules, userData) {
  // Implement the rule evaluation logic here
  // This is a placeholder implementation
  return rules.some(rule => {
    // Simple evaluation for demonstration
    const condition = new Function('data', `return ${rule.ruleString}`);
    return condition(userData);
  });
}

module.exports = router;