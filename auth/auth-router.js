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

router.post('/login', (req, res) => {
    let { username, password } = req.body;
    users.findBy({ username }).first().then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            req.session.username = user.username
            res.status(200).json({ message: `Welcome ${user.username}!`})
        } else {
            res.status(401).json({ message: 'You shall not pass!'})
        }
    }).catch(err => {
        res.status(500).json(err)
    })
})

router.delete('/', (req, res) => {
    if (req.session) {
        req.session.destroy();
        res.status(200).json({ message: 'Goodbye!'})
    }
})

module.exports = router;