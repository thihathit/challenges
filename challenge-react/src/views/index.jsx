import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';

// Blocks
import TotalDonation from '../components/blocks/TotalDonation/TotalDonation.jsx';
import CharityList from '../components/blocks/Charities/CharityList.jsx';
import CharityItem from '../components/blocks/Charities/CharityItem/CharityItem.jsx';

// Styles
import { Container, Seperator, Title } from './index.styled.jsx';

// Api
import { useDonations } from '../hooks/api.js';

const Index = () => {
  const dispatch = useDispatch();

  const { state, get: refreshDonations } = useDonations();

  const totalDonationAmount = useMemo(
    () =>
      state.get.data.reduce(
        (accumulator, value) => accumulator + value.amount,
        0
      ),
    [state.get.data]
  );

  // Fetch on mounted
  useEffect(() => {
    refreshDonations();
  }, []);

  // Sync total amount with redux
  useEffect(() => {
    dispatch({ type: 'UPDATE_TOTAL_DONATIONS', value: totalDonationAmount });
  }, [totalDonationAmount]);

  return (
    <Container>
      <Title>Omise Tamboon React</Title>

      <Seperator />

      <TotalDonation loading={state.get.loading} />

      <Seperator visible={false} />

      <CharityList>
        {({ charities, payments }) =>
          charities.map((item) => (
            <CharityItem
              id={item.id}
              key={item.id}
              image={item.image}
              name={item.name}
              currency={item.currency}
              payments={payments}
              afterPaid={refreshDonations}
            />
          ))
        }
      </CharityList>
    </Container>
  );
};

export default Index;
