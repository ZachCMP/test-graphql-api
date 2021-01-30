const db = require('./db')
const { v4: uuidv4 } = require('uuid')

const addItem = (collection, input) => db.get(collection).push({ id: uuidv4(),...input }).last().write()
const updateItem = (collection, id, input) => db.get(collection).find({ id }).assign(input).write()
const deleteItem = (collection, id) => {
  const removed = db.get(collection).find({ id }).value()
  db.get(collection).remove({ id }).write()
  return removed
}
const getItems = (collection) => db.get(collection).value()
const getItemById = (collection, id) => db.get(collection).find({ id }).value()

module.exports = {
  Query: {
    books: () => getItems('books'),
    book: (obj, { id }) => getItemById('books', id),
    authors: () => getItems('authors'),
    author: (obj, { id }) => getItemById('authors', id),
  },
  Mutation: {
    addAuthor: (obj, { input }) => addItem('authors', input),
    updateAuthor: (obj, { id, input }) => updateItem('authors', id, input),
    deleteAuthor: (obj, { id }) => deleteItem('authors', id),
    addBook: (obj, { input }) => addItem('books', input),
    updateBook: (obj, { id, input }) => updateItem('books', id, input),
    deleteBook: (obj, { id }) => deleteItem('books', id),
  },
  Book: {
    author: (obj) => db.get('authors').find({ id: obj.authorId }).value(),
  },
}