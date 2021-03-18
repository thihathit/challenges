import styled, { css } from 'styled-components';

import { screenMax } from '../styles/mixins.styled.jsx';

export const Container = styled.main`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 20px;

  padding: 80px 20px;
  box-sizing: content-box;
`;

export const Seperator = styled.div`
  width: 100%;
  height: 2px;
  margin: 0 auto;
  max-width: 35px;
  border-radius: 100px;
  background-color: #d0d1d3;

  ${({ visible = true }) => css`
    visibility: ${visible ? 'visible' : 'hidden'};
  `}
`;

export const Title = styled.h1`
  text-align: center;
  color: #687186;
  font-size: 2.5em;
  font-weight: 600;

  ${screenMax(700, () => {
    return css`
      font-size: 2.3em;
    `;
  })}

  ${screenMax(550, () => {
    return css`
      font-size: 2em;
    `;
  })}
`;

export const CopyrightText = styled.footer`
  text-align: center;
  color: #687186;
  font-size: 0.75em;
  font-weight: 500;

  padding-top: 40px;
`;
