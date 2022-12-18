import styled from 'styled-components';

export const StyledWrapper = styled.div`
  font-family: var(--font-primary);
  margin-top: 3rem;
`;

export const StyledPageHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.text3XL};
  line-height: ${({ theme }) => theme.lineHeight.text2XL};
  color: ${({ theme }) => theme.color.accentPrimaryDarker};
  font-weight: 500;
  text-align: left;
  @media screen and (min-width: 700px) {
    font-size: ${({ theme }) => theme.fontSize.text4XL};
  }
  @media screen and (min-width: 1150px) {
    line-height: ${({ theme }) => theme.lineHeight.text6XL};
    font-size: ${({ theme }) => theme.fontSize.text5XL};
  }
`;
