const express = require('express')
const router = express.Router()
const controller = require('../controllers/tgMessagesCont')

router.post('/newlid', controller.newLid)
module.exports = router