import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  ApolloClient, InMemoryCache, ApolloProvider,
} from '@apollo/client';
import store from 'redux/store';
import { Provider } from 'react-redux';
import App from './App';

const client = new ApolloClient({
  uri: 'https://4000-alisabry-juniorreactapp-6lpliojk6w2.ws-eu64.gitpod.io/',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Router>
          <App />
        </Router>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
);

// reportWebVitals();
