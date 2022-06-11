const express = require('express');
const colors = require('colors');
const { graphqlHTTP } = require('express-graphql');
require('dotenv').config();

const connectDB = require('./config/db');
const schema = require('./schema/schema');

const port = process.env.PORT || 5000;
const app = express();

// Connect to database


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

connectDB()
  .then(() => {
    app.listen(port, () => (
      console.log(`App started successfully on port ${port}...`.green.bold)
    ));
  })
  .catch((err) => {
    console.error(err);
    console.log('Could not connect to DB!'.red.bold);
  });
