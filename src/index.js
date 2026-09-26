const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const gql = require("graphql-tag");

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    tags: [String!]!
    available: Boolean!
  }

  type Query {
    health: String!
    books(available: Boolean): [Book!]!
    book(id: ID!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!, tags: [String!]): Book!
    toggleAvailability(id: ID!): Book
  }
`;

let seq = 2;
const books = [
  { id: "1", title: "Refactoring", author: "Martin Fowler", tags: ["code", "design"], available: true },
  { id: "2", title: "The Pragmatic Programmer", author: "Hunt & Thomas", tags: ["career"], available: true },
];

const resolvers = {
  Query: {
    health: () => "ok",
    books: (_p, { available }) =>
      available === undefined ? books : books.filter((b) => b.available === available),
    book: (_p, { id }) => books.find((b) => b.id === id) || null,
  },
  Mutation: {
    addBook: (_p, { title, author, tags = [] }) => {
      const book = { id: String(++seq), title, author, tags, available: true };
      books.push(book);
      return book;
    },
    toggleAvailability: (_p, { id }) => {
      const book = books.find((b) => b.id === id);
      if (!book) return null;
      book.available = !book.available;
      return book;
    },
  },
};

async function main() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, { listen: { port: 4110 } });
  console.log(`graphql-bookshelf → ${url}`);
}

main();
