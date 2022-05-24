const express = require('express');
const router = express.Router();
const transaction = require('../services/transactionsService');

router.post('/', async function(req, res, next) {
  try {
    await transaction.transfer(req.query.idOrigen, req.query.idDestino, req.query.monto);
    res.json('Transaccion realizada.');
  } catch (err) {
    console.error(`Error while transfering`, err.message);
    next(err);
  }
});

module.exports = router;