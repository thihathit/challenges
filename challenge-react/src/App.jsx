import React from 'react';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import Store from './store';
import IndexPage from './views/index.jsx';

const App = () => {
  return (
    <Provider store={Store}>
      <Toaster position="bottom-center" reverseOrder={true} />
      <IndexPage />
    </Provider>
  );
};

export default App;
