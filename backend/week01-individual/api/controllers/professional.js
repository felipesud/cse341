const mongodb = require('../db/connect');

const getData = async (req, res, next) => {
    const result = await mongodb.getDb().collection('user').find().toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
};

module.exports = { getData };
