import styled from 'styled-components';

export const StyledPageHeading = styled.h2`
  display: block;
  margin-top: 3rem;
  margin-inline: auto;
  font-family: var(--font-primary);
  font-size: ${({ theme }) => theme.fontSize.pageHeadingRegular};
  color: ${({ theme }) => theme.color.text.primary};
  font-weight: 500;
  text-align: left;
`;
