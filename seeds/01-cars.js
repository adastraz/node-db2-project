exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      const cars = [
        {
          make: 'Nissan',
          model: 'GTR',
          vin: '0002300034999',
          mileage: 10000
        },
        {
          make: 'Toyota',
          model: 'Camry',
          vin: '00000FGS034999',
          mileage: 100000
        },
        {
          make: 'Honda',
          model: 'CR-V',
          vin: 'TYL343457672T999',
          mileage: 120000
        }
      ]
      return knex('cars').insert(cars);
    });
};
