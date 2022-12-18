import styled from 'styled-components';

export const StyledList = styled.ul`
  flex-grow: 1;
  & > * + * {
    position: relative;
    margin-top: 5rem;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      top: -2.5rem;
      border-top: 0.0625rem solid ${({ theme }) => theme.color.borderDivider};
    }
  }
`;
