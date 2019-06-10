const db = require('../dbConfig')

module.exports = {
    find
}

function find() {
    db('users').select('id', 'username', 'password')
}
