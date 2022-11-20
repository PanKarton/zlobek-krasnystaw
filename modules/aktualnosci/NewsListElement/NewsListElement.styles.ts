import styled from 'styled-components';

export const StyledArticle = styled.article`
  max-width: 65rem;
  .flex-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media screen and (min-width: 1150px) {
      flex-direction: row;
    }
  }
  .news-article__img-wrapper {
    position: relative;
    width: min(100%, 400px);
    aspect-ratio: 1.61;
    background-color: #aaa;
    @media screen and (min-width: 1150px) {
      width: 400px;
    }
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background-color: hsla(0, 100%, 100%, 0.1);
      opacity: 0;
    }
    &:hover::after {
      opacity: 1;
    }
  }
  .news-article__lead {
    font-family: var(--font-primary);
    max-width: 40rem;
    .news-article__heading > h3 {
      font-family: inherit;
      font-size: ${({ theme }) => theme.fontSize.text3XL};
      font-weight: 600;
      color: ${({ theme }) => theme.color.contrast};
      &:hover {
        color: ${({ theme }) => theme.color.contrastLightHover};
      }
    }
    .news-article__paragraph {
      color: ${({ theme }) => theme.color.contrast};
      margin-top: 0.25rem;
      font-size: ${({ theme }) => theme.fontSize.textBase};
      font-weight: 500;
      line-height: 1.4;
    }
    a.news-article__read-more {
      margin-top: 0.5rem;
      background-color: transparent;
      color: ${({ theme }) => theme.color.accentPrimaryDarker};
      display: flex;
      align-items: center;
      gap: 0.125rem;
      font-weight: 800;
      font-family: inherit;
      border: none;
      padding-block: 0.5rem;
      padding-right: 0.5rem;
      &:hover {
        color: ${({ theme }) => theme.color.accentPrimaryDarkerLightHover};
        cursor: pointer;
      }
      svg {
        font-size: ${({ theme }) => theme.fontSize.text2XL};
      }
    }
  }
`;
