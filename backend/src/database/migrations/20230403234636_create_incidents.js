/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("incidents", function (table) {
    table.increments();

    table.string("title").notNullable();
    table.string("description").notNullable();
    table.string("value").notNullable();

    table.string("ong_id").notNullable(); // não pode ser nulo

    table.foreign("ong_id").references("id").inTable("ongs"); // chave strangeira
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("incidents");
};
