const express = require('express');
const router = express.Router();
const userData = require('../services/userDataService');

router.get('', async function(req, res, next) {
  try {
    if (!req.query.id && !req.query.campo) {
        res.json(await userData.getAll());
    } else {
      res.json(await userData.getByIdyCampo(req.query.id, req.query.campo));
    }
  } catch (err) {
    console.error(`Error while getting user data `, err.message);
    next(err);
  }
});

module.exports = router;