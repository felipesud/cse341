const TypeScript = require('../models/typescriptModel');
const Joi = require('joi');

const getAllTypeScript = async (req, res) => {
  try {
    const typeScriptQuestions = await TypeScript.find();
    res.status(200).json(typeScriptQuestions);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getSingleTypeScript = async (req, res) => {
  const { id } = req.params;
  try {
    const typeScriptQuestion = await TypeScript.findById(id);
    if (!typeScriptQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.status(200).json(typeScriptQuestion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const createQuestionTypeScript = async (req, res) => {
  // Esquema de validação com Joi
  const schema = Joi.object({
    question: Joi.string().required(),
    choices: Joi.array().items(Joi.string()).min(2).required(),
    answer: Joi.string().required(),
  });

  // Validando os dados recebidos
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  // Criando a nova pergunta
  const question = new TypeScript({
    question: req.body.question,
    choices: req.body.choices,
    answer: req.body.answer,
  });

  try {
    const savedQuestion = await question.save();
    res.status(201).json(savedQuestion);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateQuestionTypeScript = async (req, res) => {
  const { id } = req.params;
  const { question, choices, answer } = req.body;

  // Esquema de validação com Joi para atualização
  const schema = Joi.object({
    question: Joi.string().required(),
    choices: Joi.array().items(Joi.string()).min(2).required(),
    answer: Joi.string().required(),
  });

  // Validando os dados recebidos
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    const updatedQuestion = await TypeScript.findByIdAndUpdate(
      id,
      { question, choices, answer },
      { new: true }
    );

    if (!updatedQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteQuestionTypeScript = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedQuestion = await TypeScript.findByIdAndDelete(id);

    if (!deletedQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllTypeScript,
  getSingleTypeScript,
  createQuestionTypeScript,
  updateQuestionTypeScript,
  deleteQuestionTypeScript,
};
