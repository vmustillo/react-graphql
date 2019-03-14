import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import BookList from './components/BookList';
import AddBook from './components/AddBook';

// apollo client setup
const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI
});
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Vin's Reading List</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
