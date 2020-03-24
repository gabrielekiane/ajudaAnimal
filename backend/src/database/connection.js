const knex = require('knex');
const configuration = require('../../knexfile'); //acessar as config do banco 

const connection = knex(configuration.development);

module.exports = connection;