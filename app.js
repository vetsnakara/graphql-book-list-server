require("dotenv").config();

const express = require("express");
const graphqlHTTP = require("express-graphql");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");
const schema = require("./schema/schema");

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connection w/ DB established");
  })
  .catch(error => {
    console.log("DB connection error:", error);
  });

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
