const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  // const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM lampu_led`
  );
  const data = rows;
  const meta = {page};

  return {
    data
  }
}

async function post(led){
    const result = await db.query(
      `INSERT INTO lampu_led
      (lampu1, lampu2, lampu3, lampu4) 
      VALUES 
      ('${led.lampu1}', ${led.lampu2}, ${led.lampu3}, ${led.lampu4})`
    );
  
    let message = 'Error ';
  
    if (result.affectedRows) {
      message = 'Success';
    }
  
    return {message};
  }

module.exports = {
  getMultiple,
  post
}