'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@email.com',
        uuid: 'cf4447d6-0b76-11eb-adc1-0242ac120002',
        phone: '206-555-5555',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        firstName: 'Janes-Sister',
        lastName: 'Doe',
        email: 'janes-sister-doe@email.com',
        uuid: 'cf4447d6-0b76-11eb-adc1-0242ac120002',
        phone: '206-555-5555',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
