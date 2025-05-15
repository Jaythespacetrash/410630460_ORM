const { sequelize } = require('./orm');
const { Student, Enrollment } = require('./models');

async function relationQuery() {
  try {
    const student = await Student.findByPk(20230010, {
      include: Enrollment
    });

    if (student) {
      console.log(`學生 ${student.Name} 的選課紀錄：`);
      student.Enrollments.forEach(e => {
        console.log(`- ${e.CourseName} (${e.Status})`);
      });
    } else {
      console.log('找不到學生');
    }
  } catch (err) {
    console.error('查詢失敗：', err);
  } finally {
    await sequelize.close();
  }
}

relationQuery();
