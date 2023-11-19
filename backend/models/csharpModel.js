const mongoose = require('mongoose');

const cSharpSchema = new mongoose.Schema({
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

const CSharp = mongoose.model('CSharp', cSharpSchema);

module.exports = CSharp;
