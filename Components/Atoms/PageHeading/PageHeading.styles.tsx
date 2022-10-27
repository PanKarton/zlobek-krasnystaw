import styled from 'styled-components';

export const StyledPageHeading = styled.h2`
  position: relative;
  left: -4px;
  display: block;
  margin-top: 3rem;
  margin-inline: auto;
  font-family: var(--font-primary);
  font-size: ${({ theme }) => theme.fontSize.text3XL};
  color: ${({ theme }) => theme.color.text.primary};
  font-weight: 500;
  text-align: left;
  @media screen and (min-width: 700px) {
    font-size: ${({ theme }) => theme.fontSize.text4XL};
  }
  @media screen and (min-width: 1150px) {
    font-size: ${({ theme }) => theme.fontSize.text5XL};
  }
`;
