const express = require('express');
const router = express.Router();
const gamesCtrl = require('../../controllers/api/games')

router.get('/', gamesCtrl.index)
router.get('/:id', gamesCtrl.gameDetail)

module.exports = router