import styled, { css } from 'styled-components';

import { screenMax } from '../../../../styles/mixins.styled.jsx';

export const Container = styled.article`
  background-color: #fff;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  overflow: hidden;

  position: relative;
  z-index: 0;
`;

export const ImgWrapper = styled.div`
  position: relative;
  z-index: 0;

  padding-bottom: 40%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
`;

export const Info = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 10px;
  justify-content: space-between;

  padding: 20px;

  ${screenMax(550, () => {
    return css`
      grid-gap: 0;
      padding: 0;
      grid-template-columns: 100%;
    `;
  })}
`;

export const InfoLeft = styled.div`
  align-self: center;
`;

export const InfoRight = styled.div``;

export const Name = styled.h2`
  font-weight: 500;
  color: #687186;

  ${screenMax(550, () => {
    return css`
      text-align: center;
      padding: 15px;
    `;
  })}
`;

export const StyledButton = styled.button`
  display: block;
  cursor: pointer;
  background: none;
  border: 1px solid #244af3;
  border-radius: 3px;
  padding: 4px 8px;

  color: #244af3;
  background-color: rgba(0, 0, 0, 0);

  transition: 0.3s color, 0.3s background-color;

  &:hover {
    color: #fff;
    background-color: #244af3;
  }
`;

export const DonateButton = styled(StyledButton)`
  ${screenMax(550, () => {
    return css`
      border: 0;
      width: 100%;
      padding: 10px;
      border-radius: 0;
      color: #fff;
      background-color: #244af3;

      &:hover {
        color: #244af3;
        background-color: rgba(36, 74, 243, 0.075);
      }
    `;
  })}
`;

export const InfoPayments = styled.nav`
  position: absolute;
  z-index: 1;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr auto;
  align-items: center;
  padding: 15px;

  background-color: rgba(255, 255, 255, 0.95);

  transition: 0s top 0.3s, 0.3s opacity;

  ${({ active = false }) => `
    opacity: ${active ? 1 : 0};
    top: ${active ? 0 : '-100%'};

    ${active && 'transition:0.3s opacity;'}
  `};
`;

export const InfoPaymentsForm = styled.form`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 20px;

  button {
    margin: 0 auto;
  }
`;

export const InfoPaymentsMessage = styled.h3`
  font-size: 0.8em;
  font-weight: 500;
  color: #d61e1e;
  text-align: center;
`;

export const InfoPaymentsName = styled.h3`
  font-weight: 500;
  color: #687186;
  text-align: center;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  margin: -10px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  > * {
    margin: 5px;
  }
`;

export const Checkboxes = styled.div`
  font-size: 0.75em;
  font-weight: 600;
  color: #687186;

  label {
    cursor: pointer;
    display: block;

    position: relative;
    z-index: 0;
    padding-left: 18px;

    &:before {
      content: ' ';
      display: block;
      position: absolute;
      z-index: 1;
      left: 0;
      top: 50%;
      width: 15px;
      height: 15px;

      transform: translateY(-50%);

      background-color: #fff;
      border: 1px solid #d4d4d4;
      border-radius: 100%;

      transition: 0.3s border;
    }

    &:hover:before {
      border-color: #244af3;
      border-width: 5px;
    }
  }

  input:checked + label:before {
    border-color: #244af3;
    border-width: 5px;
  }
`;

export const CrossWrapper = styled.div`
  display: flex;
  justify-content: center;

  padding-bottom: 10px;

  > div {
    cursor: pointer;
    border: 1px solid #687186;
    border-radius: 100%;
    padding: 3px;
  }

  svg {
    max-width: 8px;
  }
`;
