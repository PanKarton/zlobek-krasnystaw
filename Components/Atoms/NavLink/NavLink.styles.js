import styled from 'styled-components';

export const StyledNavSpan = styled.span`
  position: relative;
  font-family: var(--font-primary);
  color: ${({ theme }) => theme.color.black};
  font-size: 1.125rem;
  font-weight: 400;
  text-transform: uppercase;
  @media screen and (min-width: 700px) {
    font-weight: 500;
  }
  cursor: pointer;
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    left: 0;
    bottom: -0.125rem;
    border-bottom: 3px solid ${({ theme }) => theme.color.textDarkPink};
    scale: 0 1;
    translate: -50% 0;
    transition: all 0.25s ease-in-out;
  }
  &:hover {
    color: ${({ theme }) => theme.color.textDarkPink};
  }
  &:hover::after {
    translate: 0 0;
    scale: 1;
  }
`;
