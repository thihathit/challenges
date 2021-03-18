import styled, { css } from 'styled-components';

import { screenMax } from '../../../styles/mixins.styled.jsx';

export const Container = styled.section``;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 40px;

  max-width: 900px;
  margin: 0 auto;

  ${screenMax(1000, () => {
    return css`
      grid-gap: 20px;
    `;
  })}

  ${screenMax(800, () => {
    return css`
      grid-template-columns: 100%;
    `;
  })}
`;
