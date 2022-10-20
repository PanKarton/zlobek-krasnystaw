import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  padding-block: 6rem;
  .flex-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 10rem;
  }
`;

export const StyledArticle = styled.article`
  max-width: 463px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    li {
      .li-flex-wrapper {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        .icon-wrapper {
          position: relative;
          width: 4.5rem;
          aspect-ratio: 1;
        }
        .content {
          p {
            display: block;
            font-family: var(--font-primary);
            color: ${({ theme }) => theme.color.textDarkGray};
            font-size: 1.25rem;
          }
          p + p {
            margin-top: 0.25rem;
          }
        }
      }
    }
  }
`;

export const StyledContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1rem;
  .heading-wrapper {
    color: ${({ theme }) => theme.color.textDarkGray};
    font-family: var(--font-primary);
    h3 {
      font-size: 2.25rem;
      font-weight: 500;
      line-height: 1;
    }
    p {
      font-size: 1rem;
      font-weight: 500;
      margin-left: 2px;
      margin-top: 0.25rem;
    }
  }
`;
