const express = require('express')
const { addOrder, getAllOrder } = require('../Controllers/order')

const router = express.Router()

router.post('/addOrder', addOrder)
router.get('/getAllOrder', getAllOrder)

module.exports = router