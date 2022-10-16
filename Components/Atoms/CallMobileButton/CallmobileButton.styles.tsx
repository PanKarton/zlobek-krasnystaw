import styled from 'styled-components';

export const StyledWrapper = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  &:hover > svg,
  &:hover > a {
    color: ${({ theme }) => theme.color.textDarkPink} !important;
  }
  a {
    font-family: var(--font-primary);
    font-weight: 400;
    color: ${({ theme }) => theme.color.black};
    font-size: 1.25rem;
    &:active {
      color: ${({ theme }) => theme.color.textDarkPink};
    }
  }
  svg {
    margin: 0;
  }
`;
