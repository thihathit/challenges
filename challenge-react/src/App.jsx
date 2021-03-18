import React from 'react';
import styled from 'styled-components';

import { Provider } from 'react-redux';

import Store from './store';
import IndexPage from './views/index.jsx';

const Card = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
`;

const App = () => {
  return (
    <Provider store={Store}>
      <IndexPage />
    </Provider>
  );
};

export default App;
