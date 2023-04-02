import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  position: absolute;
  flex-direction: column;
  gap: 1.5rem;
  top: 3.125rem;
  left: -1.25rem;
  padding: 0 0 1.5rem 1.25rem;
  min-width: 13rem;
  border: 0.0625rem solid #aaa;
  border-top: none;
  border-bottom-left-radius: 0.625rem;
  border-bottom-right-radius: 0.625rem;
  background-color: ${({ theme }) => theme.color.primary};
  z-index: 0;
  @media screen and (min-width: 90rem) {
    top: 2.875rem;
  }
`;
