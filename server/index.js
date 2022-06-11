const express = require('express');
const { graphqlHTTP } = require('express-graphql');
require('dotenv').config();

const schema = require('./schema/schema');

const port = process.env.PORT || 5000;
const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(port, () =>
  console.log(`App started successfully on port ${port}...`)
);
