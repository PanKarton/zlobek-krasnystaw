import styled from 'styled-components';

export const StyledWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  &:hover > svg,
  &:hover > a {
    color: ${({ theme }) => theme.color.pink} !important;
  }
  a {
    font-family: var(--font-secondary);
    font-weight: 500;
    color: ${({ theme }) => theme.color.gray300};
    font-size: 1.25rem;
    &:active {
      color: ${({ theme }) => theme.color.pink};
    }
  }
  svg {
    margin: 0;
  }
`;
