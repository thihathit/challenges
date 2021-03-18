import React, { useEffect, useMemo } from 'react';

// Elements
import Loader from '../../elements/Loader/Loader.jsx';

// Api
import { useCharities, usePayments } from '../../../hooks/api.js';

// Styles
import { Container, List } from './CharityList.styled.jsx';

const CharityList = ({ children = () => undefined }) => {
  const { state: stateCharities, get: getCharities } = useCharities();
  const { state: statePayments, get: getPayments } = usePayments();

  const loading = useMemo(
    () => stateCharities.loading || statePayments.loading,
    [stateCharities, statePayments]
  );

  // Fetch list on mount
  useEffect(() => {
    getCharities();
    getPayments();
  }, []);

  return (
    <Container>
      <Loader active={loading} />

      {!loading && (
        <List>
          {children({
            charities: stateCharities.data,
            payments: statePayments.data,
          })}
        </List>
      )}
    </Container>
  );
};

export default CharityList;
