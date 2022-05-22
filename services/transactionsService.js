const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function transfer(idOrigen, idDestino, monto){
  await db.query(
    `UPDATE userData SET balance = balance - ${monto} WHERE userName = ${idOrigen}`
  );
  await db.query(
    `UPDATE userData SET balance = balance + ${monto} WHERE userName = ${idDestino}`
  );
}

module.exports = {
  transfer
}