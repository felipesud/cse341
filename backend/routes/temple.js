const routes = require('express').Router();
const temples = require('../controllers/temple.js');


/**
 * @typedef User
 * @property {string} name.required - Nome do usuário
 * @property {string} email - Endereço de e-mail do usuário
 */

/**
 * This function gets all users
 * @route GET /users
 * @group Users
 * @operationId getUsers
 * @returns {Array.<User>} 200 - Lista de usuários
 * @returns {Error} 500 - Erro interno do servidor
 */


routes.get('/', temples.findAll);
routes.get('/:temple_id', temples.findOne);

routes.post('/', temples.create);

module.exports = routes;
