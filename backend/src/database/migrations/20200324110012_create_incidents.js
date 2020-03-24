//metodo UP responsavel pela criaçao da tabela

exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
      table.increments(); //primary key

      table.string('title').notNullable();
      table.string('description').notNullable();
      table.decimal('value').notNullable();
      
      table.string('ong_id').notNullable();

      table.foreign('ong_id').references('id').inTable('ongs');
  })
};

//down caso vc precise deletar oq foi feito
exports.down = function(knex) {
    knex.schema.dropTable('incidents');
};
