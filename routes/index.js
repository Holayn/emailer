const express = require('express');

const emailer = require('../services/emailer');

const router = express.Router();

router.post('/email', (req, res) => {
  emailer.email(req.body.emailFrom, req.body.emailTo, req.body.subject, req.body.text)
  res.sendStatus(200);
});

module.exports = router;