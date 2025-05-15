const { Student, Course, Department } = require('./models');

async function testRelations() {
  try {
    // 查詢學生及其所屬系所
    const student = await Student.findByPk('S10810100', {
      include: [Department]
    });

    if (student) {
      console.log(`學生 ${student.Name} 屬於 ${student.Department.Department_Name} 系`);
    } else {
      console.log('找不到學生');
    }

    // 查詢學生及其選修課程
    const studentWithCourses = await Student.findByPk('S10810100', {
      include: [Course]
    });

    if (studentWithCourses) {
      console.log(`${studentWithCourses.Name} 選修的課程：`);
      studentWithCourses.Courses.forEach(course => {
        console.log(`- ${course.Title} (${course.Credits} 學分)`);
      });
    }

    // 查詢課程及其選課學生
    const courseWithStudents = await Course.findByPk('CS101', {
      include: [Student]
    });

    if (courseWithStudents) {
      console.log(`選修 ${courseWithStudents.Title} 的學生：`);
      courseWithStudents.Students.forEach(student => {
        console.log(`- ${student.Name} (${student.StudentID})`);
      });
    }

  } catch (err) {
    console.error('關聯查詢出錯：', err);
  }
}

testRelations();
