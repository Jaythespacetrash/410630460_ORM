const { sequelize, DataTypes } = require('./orm');

const Student = sequelize.define('Student', {
  StudentID: {
    type: DataTypes.STRING(9),
    primaryKey: true
  },
  Name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  Gender: DataTypes.STRING(10),
  Email: DataTypes.STRING(100),
  Department_ID: DataTypes.STRING(5)
}, {
  tableName: 'Students',
  timestamps: false
});

module.exports = Student;