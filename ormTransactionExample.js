const { sequelize } = require('./orm');
const { Student, Enrollment } = require('./models');

async function transactionExample() {
  const t = await sequelize.transaction();
  try {
    const studentId = 20230010;

    await Student.update(
      { Email: 'newemail@example.com' },
      { where: { StudentID: studentId }, transaction: t }
    );

    await Enrollment.update(
      { Status: '轉系' },
      { where: { StudentID: studentId }, transaction: t }
    );

    await t.commit();
    console.log('交易完成');
  } catch (err) {
    await t.rollback();
    console.error('交易失敗，已回滾：', err);
  } finally {
    await sequelize.close();
  }
}

transactionExample();
