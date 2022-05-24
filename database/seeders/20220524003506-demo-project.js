'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('projects', [{
      name: "Project 1",
      description: "Description of project 1",
      manager: "Manager 1",
      asignedTo: "User 1",
      status: "in Progress",
      userId: 1,
      createdAt: new Date,
      updatedAt: new Date,
    },{
      name: "Project 2",
      description: "Description of project 2",
      manager: "Manager 2",
      asignedTo: "User 2",
      status: "to verify",
      userId: 1,
      createdAt: new Date,
      updatedAt: new Date,
    },{
      name: "Project 3",
      description: "Description of project 3",
      manager: "Manager 3",
      asignedTo: "User 3",
      status: "done",
      userId: 1,
      createdAt: new Date,
      updatedAt: new Date,
    },{
      name: "Project 4",
      description: "Description of project 4",
      manager: "Manager 4",
      asignedTo: "User 4",
      status: "done",
      userId: 2,
      createdAt: new Date,
      updatedAt: new Date,
    }]
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('projects', null, {});
  }
};
