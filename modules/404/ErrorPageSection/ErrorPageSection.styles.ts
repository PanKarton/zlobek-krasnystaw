import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;
  margin-top: 4rem;
  padding-block: 4rem 7rem;
  @media screen and (min-width: 90rem) {
    margin-top: 4.5rem;
    padding-block: 5.5rem 10rem;
  }
`;

export const StyledArticle = styled.article`
  .flex-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.color.accentPrimaryDarker};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    h2 {
      font-size: ${({ theme }) => theme.fontSize.text8XL};
      line-height: ${({ theme }) => theme.lineHeight.text5XL};
      font-weight: 500;
      @media screen and (min-width: 90rem) {
        font-size: 15.625rem;
        line-height: 12rem;
      }
    }
    .paragraphs-wrapper {
      text-align: center;
      margin-block: 1rem 2rem;
      @media screen and (min-width: 90rem) {
        margin-block: 3rem;
      }
      p {
        &:first-child {
          font-size: ${({ theme }) => theme.fontSize.text2XL};
          line-height: ${({ theme }) => theme.lineHeight.text2XL};
          font-weight: 500;
          @media screen and (min-width: 90rem) {
            font-size: ${({ theme }) => theme.fontSize.text3XL};
          }
        }
        &:nth-child(2) {
          margin-top: 0.5rem;
          font-size: ${({ theme }) => theme.fontSize.textXL};
          line-height: ${({ theme }) => theme.lineHeight.textBase};
          @media screen and (min-width: 90rem) {
            margin-top: 1rem;
            font-size: ${({ theme }) => theme.fontSize.text2XL};
          }
        }
      }
    }
  }
`;
