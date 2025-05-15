const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('lab_CRUD', 'root', 'rootpass', {
  host: 'localhost',
  dialect: 'mariadb',
});

module.exports = { sequelize, DataTypes };
