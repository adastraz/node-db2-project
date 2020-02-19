
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments('car_id')
      tbl.string('vin', 17).notNullable()
      tbl.string('make', 128).notNullable().index()
      tbl.string('model', 128).notNullable().index()
      tbl.integer('mileage', 11).notNullable()
      tbl.string('transmission', 20)
      tbl.string('title', 20)
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars")
};
