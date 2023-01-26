import styled from 'styled-components';

export const StyledMain = styled.main`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: -2.875rem;
    left: 0;
    right: 0;
    height: 0.5rem;
    background-color: ${({ theme }) => theme.color.primary};

    @media screen and (min-width: 28rem) {
      top: -3.0625rem;
    }
    @media screen and (min-width: 62.5rem) {
      top: -3.125rem;
    }
    @media screen and (min-width: 90rem) {
      top: -3.25rem;
    }
  }
`;
