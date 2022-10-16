import styled from 'styled-components';

export const StyledPageHeading = styled.h2`
  display: block;
  width: min(1440px, calc(100% - 2.75rem));
  margin-top: 3rem;
  margin-inline: auto;
  font-family: var(--font-primary);
  font-size: clamp(2rem, 2.25vw, 2.5rem);
  color: ${({ theme }) => theme.color.textDarkerGray};
  font-weight: 500;
  text-align: left;
  @media screen and (min-width: 900px) {
    width: min(1440px, 800px);
  }
  @media screen and (min-width: 1150px) {
    width: min(1440px, 960px);
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 0.5rem;
  }
`;
