import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TweenLite, Circ } from 'gsap';

// Helpers
import { formatNumber } from '../../../helpers.js';

// Elements
import Loader from '../../elements/Loader/Loader.jsx';

// Styles
import {
  Container,
  Number,
  NumberTitle,
  Info,
} from './TotalDonation.styled.jsx';

const TotalDonation = ({ loading = false, duration = 0.8 }) => {
  const total = useSelector(({ total_donations }) => total_donations);

  const [currentNumber, setCurrentNumber] = useState(() => total);

  useEffect(() => {
    const Initial = {
      target: currentNumber,
    };

    const Animation = TweenLite.to(Initial, duration, {
      target: total,
      roundProps: 'target',
      ease: Circ.easeInOut,
      onUpdate() {
        setCurrentNumber(Initial.target);
      },
    });

    return () => {
      Animation.kill();
    };
  }, [total]);

  return (
    <Container>
      <Loader active={loading} />

      {!loading && (
        <Info>
          <NumberTitle>Total Donations</NumberTitle>

          <Number>THB {formatNumber(currentNumber)}</Number>
        </Info>
      )}
    </Container>
  );
};

export default TotalDonation;
