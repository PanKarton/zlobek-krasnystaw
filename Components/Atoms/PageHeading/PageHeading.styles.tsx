import styled from 'styled-components';

export const StyledPageHeading = styled.h2`
  display: block;
  margin-top: 3rem;
  margin-inline: auto;
  font-family: var(--font-primary);
  font-size: clamp(2rem, 2.25vw, 2.5rem);
  color: ${({ theme }) => theme.color.textDarkerGray};
  font-weight: 500;
  text-align: left;
`;
