const { prisma } = require("../hello-world/generated/prisma-client");
const { GraphQLServer } = require("graphql-yoga");

const server = new GraphQLServer({
  //typeDefs: "./src/schema.graphql",
  schema: "../hello-world/datamodel.prisma",
  context: { prisma }
});

const graphQLOptions = {
  endpoint: 'https://us1.prisma.sh/fastpenguin91-c6edf8/someday/dev'
}

server.start(graphQLOptions, () => console.log(`Server is running on http://localhost:4000`));
