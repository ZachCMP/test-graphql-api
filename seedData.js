const db = require('./db')
const { v4: uuidv4 } = require('uuid')

const authors = [
  {
    id: uuidv4(),
    name: 'Mr. Bill',
  },
  {
    id: uuidv4(),
    name: 'Ms. Smith',
  }
]

const seed = () => {
  db.setState({
    books: [
      {
        id: uuidv4(),
        title: 'The Awakening',
        authorId: authors[0].id,
      },
      {
        id: uuidv4(),
        title: 'City of Glass',
        authorId: null,
      },
    ],
    authors,
  }).write()
}

seed()
