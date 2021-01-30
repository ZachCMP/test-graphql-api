const fs = require('fs')
const path = require('path')
const { ApolloServer, gql } = require('apollo-server');

const schemaFile = fs.readFileSync(path.resolve(__dirname, 'schema.graphql'))
const typeDefs = gql(schemaFile.toString())

const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});