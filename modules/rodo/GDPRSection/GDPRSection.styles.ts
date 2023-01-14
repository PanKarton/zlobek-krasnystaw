import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding-bottom: 5rem;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.color.contrast};
  @media screen and (min-width: 56.25rem) {
    padding-bottom: 5rem;
    translate: 0.25rem 0;
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.textBase};
    line-height: ${({ theme }) => theme.lineHeight.text4XL};
    max-width: 65ch;
    @media screen and (min-width: 96.875rem) {
      font-size: ${({ theme }) => theme.fontSize.textXL};
    }
  }
  h3 {
    font-size: ${({ theme }) => theme.fontSize.text2XL};
    line-height: ${({ theme }) => theme.lineHeight.text4XL};
    font-weight: 500;
    margin-top: 3rem;
    @media screen and (min-width: 96.875rem) {
      font-size: ${({ theme }) => theme.fontSize.text3XL};
    }
  }
  ul {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;
