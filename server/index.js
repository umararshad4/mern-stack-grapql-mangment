const express = require("express");
require("dotenv").config();
require("colors");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const port = process.env.PORT || 5127;
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const app = express();
app.use(cors());
// connection to the database
connectDB();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(port, () => {
  console.log(`listening the port http://localhost:${port}`);
});
