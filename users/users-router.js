const express = require('express')

const users = require('./users-model')
const restricted = require('../auth/restricted')

const router = express.Router()

router.get('/', restricted, (req, res) => {
    users.find().then(users => {
        res.status(200).json(users)
    }).catch(err => {
        res.status(500).json(err)
    })
} )

router.get('/:id', (req, res) => {
    users.findById(req.params.id).then(user => {
        console.log(user)
        res.status(200).json(user)
    }).catch(err => {
        res.status(500).json(err)
    })
})
module.exports = router;