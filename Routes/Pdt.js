const express = require('express')
const { addPdt, getAllPdt, updatePdt, deletePdt } = require('../Controllers/pdt')

const router = express.Router()

router.post('/addPdt', addPdt)
router.get('/getAllPdt', getAllPdt)
router.put('/updatePdt/:id', updatePdt)
router.delete('/deletePdt/:id', deletePdt)

module.exports = router