const db = require('./db')
const { v4: uuidv4 } = require('uuid')
console.log(db.get('books').value())