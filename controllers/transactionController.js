const express = require('express');
const router = express.Router();
const transaction = require('../services/transactionsService');

router.get('', async function(req, res, next) {
  try {
    await transaction.transfer(req.query.idOrigen, req.query.idDestino, req.query.monto)
  } catch (err) {
    console.error(`Error while transfering`, err.message);
    next(err);
  }
});

module.exports = router;