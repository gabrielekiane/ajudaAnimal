const knex = require('knex');
const configuration = require('../../knexfile'); //acessar as config do banco 

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const connection = knex(config);

module.exports = connection;