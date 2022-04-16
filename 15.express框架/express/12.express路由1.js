const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json(["why","koce","dksf"])
})

router.get('/:id', (req, res, next) => {
  res.json(`${req.params.id}用户信息`)
})

router.post('/', (req, res, next) => {
  res.json("sdfsdf")
})

module.exports = router;