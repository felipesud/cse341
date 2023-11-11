const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags = ['Users']
    const result = await mongodb.getDb().collection('users').find(); 
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    })
};

const getSingle = async (req, res) => {
    //#swagger.tags = ['Users']
    const id = req.params.id;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        res.status(400).send('Invalid ID format');
        return;
    }
    const userId = new ObjectId(id);
    const result = await mongodb.getDb().collection('users').findOne({ _id: userId }); 
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result); 
};


const createUser = async (req, res) => {
    //#swagger.tags = ['Users']
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDb().collection('users').insertOne(user);
    if(response.acknowledged > 0){
        res.status(204).send();
    }else {
        res.status(500).json(response.error || 'Some error ocurred while creating the user');
    }
};

const updateUser = async (req, res) => {
    //#swagger.tags = ['Users']
    const userId = new ObjectId(req.params.id);
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday    
    };
    const response = await mongodb.getDb().collection('users').replaceOne({ _id: userId }, user );
};

const deleteUser = async (req, res) => {
    //#swagger.tags = ['Users']
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().collection('users').deleteOne({ _id: userId });
    if(response.acknowledged > 0){
        res.status(204).send();
    }else {
        res.status(500).json(response.error || 'Some error ocurred while deleting the user');
    }
}



module.exports = { getAll, getSingle, createUser, updateUser, deleteUser };
