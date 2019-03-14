const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// allow cross-origin requests
app.use(cors());

const OPTS = { useNewUrlParser: true };
mongoose.connect(process.env.URI, OPTS, err => {
  if (err) {
    console.error(err);
    return console.error('Failed to connect to db');
  } else {
    console.log('Successfully connected to db');
  }
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log('now listening for requests on port 4000...');
});
