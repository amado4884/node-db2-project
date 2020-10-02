exports.up = function (knex) {
  return knex.schema.createTable("cars", (table) => {
    table.increments();
    table.string("vin").notNullable();
    table.string("make").notNullable();
    table.string("model").notNullable();
    table.float("mileage").notNullable();
    table.string("transmission");
    table.string("title");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("cars");
};
