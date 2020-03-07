const express = require("express");
const graphqlHTTP = require("express-graphql");
const morgan = require("morgan");

const app = express();

app.use(morgan("tiny"));

app.use("/graphql", (req, res) => graphqlHTTP({}));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
