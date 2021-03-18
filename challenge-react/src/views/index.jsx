import React from 'react';
import { useSelector } from 'react-redux';

// Styles
import { Container } from './index.styled.jsx';

const Index = () => {
  const Store = useSelector((state) => state);

  return (
    <Container>
      <h1>Omise Tamboon React</h1>

      {JSON.stringify(Store, null, 2)}
    </Container>
  );
};

export default Index;
