const express = require('express')
const { payment, verify } = require('./controllers')

const router = express.Router()

router.get('/', async (req, res) => {
    await res.send("Home route")
})
router.post('/pay/:cartId', payment)
router.post('/verify/:id', verify)

module.exports = router;
