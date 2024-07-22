const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ruleSchema = new Schema({
  name: { type: String, required: true },
  ruleString: { type: String, required: true },
}, {
  timestamps: true,
});

const Rule = mongoose.model('Rule', ruleSchema);
//added
module.exports = Rule;