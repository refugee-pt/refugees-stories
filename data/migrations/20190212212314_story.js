
exports.up = function(knex, Promise) {
  return knex.schema.createTable('story',table => {
      table.increments();
      table.string('image').notNullable();
      table.boolean('approved'); //should be false
      table.text('content');
      table.string('author').notNullable();
      table.string('location').notNullable();
      table.integer('age').notNullable();

  } )
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('story');
};
