const express = require('express');
const mongodb = require('../db/connect'); // Importe o módulo mongodb
const professionalController = require('../controllers/professional');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        // Inicialize a conexão com o banco de dados
        await mongodb.initDb(async (err, db) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Erro ao conectar ao banco de dados.' });
            }

            // Acesse a coleção 'user' e execute a consulta
            const collection = db.collection('user');
            const result = await collection.find().toArray();

            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(result);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar dados.' });
    }
});

module.exports = router;
