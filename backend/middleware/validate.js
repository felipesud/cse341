const validator = require('../helpers/validate');

const saveQuiz = (req, res, next) => {
    const validationRule = {
        question: 'required|string',
        choices: 'required|array',
        answer: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if(!status){
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        }else{
            next();
        }
    });
};

module.exports = {
    saveQuiz
};