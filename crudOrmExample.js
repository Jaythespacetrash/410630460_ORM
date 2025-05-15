const { sequelize } = require('./orm');
const { Student, Enrollment } = require('./models');

async function crudExample() {
  try {
    // Sync models (optional: only first time)
    await sequelize.sync();

    // 1. Create
    const student = await Student.create({
      StudentID: 20230099,
      Name: '張大明',
      Gender: 'M',
      Email: 'daming@example.com'
    });
    console.log('新增學生成功：', student.toJSON());

    const enrollment = await Enrollment.create({
      StudentID: 20230099,
      CourseName: '資料結構',
      Status: '正常'
    });
    console.log('新增修課紀錄成功：', enrollment.toJSON());

    // 2. Read
    const found = await Student.findByPk(20230099, { include: Enrollment });
    console.log('查詢結果：', found.toJSON());

    // 3. Update
    await Student.update({ Name: '張小明' }, { where: { StudentID: 20230099 } });
    console.log('更新成功');

    // 4. Delete
    await Enrollment.destroy({ where: { StudentID: 20230099 } });
    await Student.destroy({ where: { StudentID: 20230099 } });
    console.log('刪除成功');
  } catch (err) {
    console.error('操作失敗：', err);
  } finally {
    await sequelize.close();
  }
}

crudExample();
