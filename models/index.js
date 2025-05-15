const { sequelize } = require('./orm');
const Student = require('./Student');
const Department = require('./Department');
const Course = require('./Course');
const Enrollment = require('./Enrollment');

Department.hasMany(Student, { foreignKey: 'Department_ID' });
Student.belongsTo(Department, { foreignKey: 'Department_ID' });

Department.hasMany(Course, { foreignKey: 'Department_ID' });
Course.belongsTo(Department, { foreignKey: 'Department_ID' });

Student.belongsToMany(Course, {
  through: Enrollment,
  foreignKey: 'Student_ID',
  otherKey: 'Course_ID'
});

Course.belongsToMany(Student, {
  through: Enrollment,
  foreignKey: 'Course_ID',
  otherKey: 'Student_ID'
});

module.exports = {
  sequelize,
  Student,
  Department,
  Course,
  Enrollment
};
