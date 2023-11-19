const Joi = require('joi');

const saveQuiz = (req, res, next) => {
  const validationRule = Joi.object({
    question: Joi.string().required(),
    choices: Joi.array().items(Joi.string()).min(2).required(),
    answer: Joi.string().required(),
  });

  const { error } = validationRule.validate(req.body);
  if (error) {
    return res.status(412).json({
      success: false,
      message: 'Validation failed',
      data: error.details[0].message,
    });
  }

  next();
};

module.exports = {
  saveQuiz,
};
