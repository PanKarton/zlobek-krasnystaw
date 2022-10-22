import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  .flex-wrapper {
    padding-block: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 5rem;
    @media screen and (min-width: 1150px) {
      flex-direction: row;
      justify-content: space-between;
      gap: 5rem;
    }
    @media screen and (min-width: 1550px) {
      gap: 14.5rem;
      padding-block: 6rem;
    }
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
          width: clamp(2.5rem, 9vw, 4.5rem);
          aspect-ratio: 1;
        }
        .content {
          p {
            display: block;
            font-family: var(--font-primary);
            color: ${({ theme }) => theme.color.textDarkGray};
            font-size: clamp(1rem, 1.5vw, 1.5rem);
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
  align-items: center;
  gap: 0.5 rem;
  width: 100%;
  @media screen and (min-width: 1550px) {
    flex-basis: 50%;
  }
  .heading-wrapper {
    color: ${({ theme }) => theme.color.textDarkGray};
    font-family: var(--font-primary);
    width: min(100%, 55rem);
    h3 {
      font-size: clamp(1.75rem, 2.25vw, 2rem);
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