import { css } from 'styled-components';

export const screenMax = (size, styles) => css`
  @media only screen and (max-width: ${size}px) {
    ${styles()}
  }
`;
