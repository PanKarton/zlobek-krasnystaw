import styled from 'styled-components';

export const StyledNavSpan = styled.span`
  position: relative;
  font-family: var(--font-secondary);
  color: ${({ theme }) => theme.color.black};
  font-size: 1.5rem;
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    left: 0;
    bottom: -0.125rem;
    border-bottom: 3px solid ${({ theme }) => theme.color.pink};
    scale: 0 1;
    translate: -50% 0;
    transition: all 0.25s ease-in-out;
  }
  &:hover {
    color: ${({ theme }) => theme.color.pink};
  }
  &:hover::after {
    translate: 0 0;
    scale: 1;
  }
`;
