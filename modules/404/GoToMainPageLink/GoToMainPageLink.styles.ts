import styled from 'styled-components';

export const StyledSpan = styled.span`
  display: block;
  border: 0.125rem solid ${({ theme }) => theme.color.accentPrimaryDarker};
  padding: 0.675rem 3rem;
  border-radius: 620rem;
  color: ${({ theme }) => theme.color.accentPrimaryDarker};
  font-weight: 500;
  transition: all 0.125s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.accentPrimaryDarker};
    color: ${({ theme }) => theme.color.primary};
  }
`;
