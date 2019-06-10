const express = require('express')
const bcrypt = require('bcryptjs');
const users = require('../users/users-model')

const router = express.Router()

router.post('/register', (req, res) => {
    const user = req.body
    const hash = bcrypt.hashSync(user.password, 8)
    user.password = hash;
    users.add(user).then(saved => {
        res.status(201).json(saved)
    }).catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;