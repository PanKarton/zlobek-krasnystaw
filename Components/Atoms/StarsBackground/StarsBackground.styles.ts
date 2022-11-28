import styled from 'styled-components';

export const StyledDiv = styled.div`
  position: absolute;
  top: -4rem;
  width: 100vw;
  bottom: 1rem;
  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1rem;
    background: rgb(255, 255, 255);
    background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(34, 193, 195, 0) 75%);
  }
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 1rem;
    background: rgb(255, 255, 255);
    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(34, 193, 195, 0) 75%);
  }
`;
