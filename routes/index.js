/*
File name: index.js
Author’s Name: Apple Coleene Duquinal
StudentID:  301000645
Web App Name: COMP229-M2021-MidTerm-301000645
*/

var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);

module.exports = router;
