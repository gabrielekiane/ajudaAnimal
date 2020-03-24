//metodo UP responsavel pela criaçao da tabela

exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable(); //2 - tamanho do texto armazenado
  })
};

//down caso vc precise deletar oq foi feito
exports.down = function(knex) {
    knex.schema.dropTable('ongs');
};
