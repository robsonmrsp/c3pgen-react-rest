import React from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Layout } from '@/common/ui/layout';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const queryCache = new QueryCache();

const App = () => (
  <>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Router>
        <ToastContainer autoClose={8000} />
        <Layout />
      </Router>
    </ReactQueryCacheProvider>
    <ReactQueryDevtools />
  </>
);

export default App;
