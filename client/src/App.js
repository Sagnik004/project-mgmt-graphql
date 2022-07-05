import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Header from './components/Header';

const configuredCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const apolloClient = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: configuredCache,
});

function App() {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Router>
          <Header />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
