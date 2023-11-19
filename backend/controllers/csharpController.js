const CSharp = require('../models/csharpModel');
const Joi = require('joi');

const getAllCSharp = async (req, res) => {
  try {
    const cSharpQuestions = await CSharp.find();
    res.status(200).json(cSharpQuestions);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getSingleCSharp = async (req, res) => {
  const { id } = req.params;
  try {
    const cSharpQuestion = await CSharp.findById(id);
    if (!cSharpQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.status(200).json(cSharpQuestion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const createQuestionCSharp = async (req, res) => {
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
  const question = new CSharp({
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

const updateQuestionCSharp = async (req, res) => {
  const { id } = req.params;
  const { question, choices, answer } = req.body;

  // Esquema de validação com Joi para atualização
  const schema = Joi.object({
    question: Joi.string().required(),
    choices: Joi.array().items(Joi.string()).min(2).required(),
    answer: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    const updatedQuestion = await CSharp.findByIdAndUpdate(
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

const deleteQuestionCSharp = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedQuestion = await CSharp.findByIdAndDelete(id);

    if (!deletedQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllCSharp,
  getSingleCSharp,
  createQuestionCSharp,
  updateQuestionCSharp,
  deleteQuestionCSharp,
};
