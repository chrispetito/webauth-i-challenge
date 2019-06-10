const db = require('../dbConfig')

module.exports = {
    find,
    add
}

function find() {
  return  db('users').select('id', 'username', 'password')
}

function add(user) {
    return db('users').insert(user, 'id').then(ids => {
        const [id] = ids
        return findById(id)
    })
}

function findById(id) {
    return db('users').where({ id }).first();
}