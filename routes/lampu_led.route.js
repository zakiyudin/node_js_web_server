const express = require('express');
const router = express.Router();
const lampu = require('../services/lampu_led');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await lampu.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error  `, err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next) {
    try {
      res.json(await lampu.post(req.body));
    } catch (err) {
      console.error(`Error `, err.message);
      next(err);
    }
  });

module.exports = router;