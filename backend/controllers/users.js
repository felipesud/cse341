const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags = ['Users']
    try {
        const result = await mongodb.getDb().collection('users').find().toArray();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving users' });
    }
};

const getSingle = async (req, res) => {
    //#swagger.tags = ['Users']
    const id = req.params.id;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        res.status(400).send('Invalid ID format');
        return;
    }
    const userId = new ObjectId(id);
    try {
        const result = await mongodb.getDb().collection('users').findOne({ _id: userId });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving user' });
    }
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

    try {
        const response = await mongodb.getDb().collection('users').insertOne(user);
        res.status(200).json({ message: 'User created successfully', userId: response.insertedId });
    } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
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

    try {
        const response = await mongodb.getDb().collection('users').replaceOne({ _id: userId }, user);
        if (response.modifiedCount > 0) {
            res.status(200).json({ message: 'User updated successfully', userId: response.insertedId });
        } else {
            res.status(500).json({ error: 'No user found to update' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error updating user' });
    }
};

const deleteUser = async (req, res) => {
    //#swagger.tags = ['Users']
    const userId = new ObjectId(req.params.id);

    try {
        const response = await mongodb.getDb().collection('users').deleteOne({ _id: userId });
        if (response.deletedCount > 0) {
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(500).json({ error: 'No user found to delete' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error deleting user' });
    }
};

module.exports = { getAll, getSingle, createUser, updateUser, deleteUser };
