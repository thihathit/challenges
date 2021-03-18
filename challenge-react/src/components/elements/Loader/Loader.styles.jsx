import styled from 'styled-components';

export const MainWrapper = styled.section(({ fullPage, fullBgColor }) => {
  if (fullPage) {
    return `
        cursor: progress;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${fullBgColor};
        zindex: 9999999;
        position: fixed;
    `;
  }
});
