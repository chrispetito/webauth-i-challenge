const db = require('../dbConfig')

module.exports = {
    find
}

function find() {
  return  db('users').select('id', 'username', 'password')
}
