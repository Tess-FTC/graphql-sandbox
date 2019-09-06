import { GraphQLServer } from 'graphql-yoga'

const typeDefs = `
 type Query {
   title: String!
   price: Float!
   releaseYear: Int
   rating: Float
   inStock: Boolean
   user: MacUser!
   post: Post!
   add(a: Int, b: Int): Float!
 }

 type MacUser {
   id: ID!
   name: String!
   email: String!
   age: Int
 }

 type Post {
   id: ID!
   title: String!
   body: String!
   published: Boolean!
 }
`
const resolvers = {
  Query: {
    title() {
      return "Macbook OSX"
    },
    price() {
      return 2049.99
    },
    releaseYear() {
      return 2008
    },
    rating() {
      return 4.5
    },
    inStock() {
      return true
    },
    user() {
      return {
        id: "di465",
        name: "Mike",
        email: "mike@example.com",
        age: 25
      }
    },
    post() {
      return{
        id: "dn973",
        title: "My First Blog",
        body: "It's fun to learn Graphql!",
        published: true
      }
    },
    add(parent, args, ctx, info) {
      console.log(args);
      if (args.a && args.b) {
        return args.a + args.b
      } else {
        return 0
      }
      
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => {
  console.log('This server is FINALLLLLYY running!')
})