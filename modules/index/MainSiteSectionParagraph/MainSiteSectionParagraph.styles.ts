import styled from 'styled-components';

export const StyledParagraph = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.textBase};
  line-height: ${({ theme }) => theme.lineHeight.textLG};
  font-weight: 500;
  @media screen and (min-width: 43.75rem) {
    font-size: ${({ theme }) => theme.fontSize.textLG};
    line-height: ${({ theme }) => theme.lineHeight.text2XL};
  }
  @media screen and (min-width: 96.875rem) {
    font-size: ${({ theme }) => theme.fontSize.textXL};
    line-height: ${({ theme }) => theme.lineHeight.text4XL};
  }
`;
