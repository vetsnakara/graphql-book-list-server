const express = require("express");
const graphqlHTTP = require("express-graphql");
const morgan = require("morgan");
const app = express();

const schema = require("./schema/schema");

app.use(morgan("tiny"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
