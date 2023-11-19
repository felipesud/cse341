const mongoose = require('mongoose');

const typescriptSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  choices: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const TypeScript = mongoose.model('TypeScript', typescriptSchema);

module.exports = TypeScript;
