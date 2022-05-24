'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      firstName: "Mick",
      lastName: "Jagger",
      email: "mick@stones.com",
      image: "mick.jpg",
      password: "stones",
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
    },{
      firstName: "Keith",
      lastName: "Richards",
      email: "keith@stones.com",
      image: "keith.jpg",
      password: "stones",
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
    },{
      firstName: "Charlie",
      lastName: "Watts",
      email: "charlie@stones.com",
      image: "charlie.jpg",
      password: "stones",
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
    },{
      firstName: "Ronnie",
      lastName: "Wood",
      email: "ronnie@stones.com",
      image: "ronnie.jpg",
      password: "stones",
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
    }]
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
