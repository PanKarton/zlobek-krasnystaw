import styled from 'styled-components';

export const StyledArticle = styled.article`
  max-width: 65rem;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  animation: fade-in 0.5s;
  .flex-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }

  h3.heading {
    font-family: inherit;
    font-size: ${({ theme }) => theme.fontSize.text2XL};
    font-weight: 600;
    color: ${({ theme }) => theme.color.contrast};
    translate: -0.125rem 0;
    @media screen and (min-width: 96.875rem) {
      font-size: ${({ theme }) => theme.fontSize.text3XL};
    }
    &:hover {
      color: ${({ theme }) => theme.color.contrastLightHover};
    }
  }

  p.content,
  p.publishDate {
    color: ${({ theme }) => theme.color.contrast};
    font-size: ${({ theme }) => theme.fontSize.textBase};
    line-height: 1.4;
    font-weight: 500;
  }

  div.content {
    margin-block: 0.5rem;
    max-width: 70ch;
    /* add ... when --max-lines is reached*/
    --max-lines: 3;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: var(--max-lines);
    -webkit-box-orient: vertical;
  }

  span.read-more {
    background-color: transparent;
    color: ${({ theme }) => theme.color.accentPrimaryDarker};
    display: flex;
    align-items: center;
    gap: 0.125rem;
    font-weight: 600;
    font-family: inherit;
    border: none;
    padding-right: 0.5rem;
    &:hover {
      color: ${({ theme }) => theme.color.accentPrimaryDarkerLightHover};
      cursor: pointer;
    }
    svg {
      font-size: ${({ theme }) => theme.fontSize.text2XL};
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
