import styled from 'styled-components';

export const StyledArticle = styled.article`
  padding-block: 1rem 4rem;
  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media screen and (min-width: 62.5rem) {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      li {
        flex-basis: 25rem;
      }
    }
    @media screen and (min-width: 96.875rem) {
      max-width: 53rem;
    }

    li {
      .li-flex-wrapper {
        display: flex;
        align-items: center;
        gap: 1rem;
        .icon-wrapper {
          position: relative;
          width: clamp(2.5rem, 9vw, 4.5rem);
          aspect-ratio: 1;
        }
        .content {
          p,
          span {
            display: block;
            font-family: ${({ theme }) => theme.fontFamily.primary};
            color: ${({ theme }) => theme.color.contrast};
            font-size: ${({ theme }) => theme.fontSize.textBase};
            font-weight: 500;
            @media screen and (min-width: 43.75rem) {
              font-size: ${({ theme }) => theme.fontSize.textLG};
            }
            @media screen and (min-width: 96.875rem) {
              font-size: ${({ theme }) => theme.fontSize.textXL};
            }
          }
          p + p {
            margin-top: 0.25rem;
          }
        }
      }
    }
  }
`;
