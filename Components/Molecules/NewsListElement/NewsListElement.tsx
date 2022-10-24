import Link from 'next/link';
import { BiRightArrowAlt } from 'react-icons/bi';
import styled from 'styled-components';

const StyledArticle = styled.article`
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
      background-color: ${({ theme }) => theme.color.background.imageTransparentHover};
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
      color: ${({ theme }) => theme.color.text.primary};
      &:hover {
        color: ${({ theme }) => theme.color.text.primaryLightHover};
      }
    }
    .news-article__paragraph {
      color: ${({ theme }) => theme.color.text.primary};
      margin-top: 0.25rem;
      font-size: ${({ theme }) => theme.fontSize.textBase};
      font-weight: 500;
      line-height: 1.4;
    }
    a.news-article__read-more {
      margin-top: 0.5rem;
      background-color: transparent;
      color: ${({ theme }) => theme.color.text.accentSecondary};
      display: flex;
      align-items: center;
      gap: 0.125rem;
      font-weight: 800;
      font-family: inherit;
      border: none;
      padding-block: 0.5rem;
      padding-right: 0.5rem;
      &:hover {
        color: ${({ theme }) => theme.color.text.accentSecondaryLightHover};
        cursor: pointer;
      }
      svg {
        font-size: ${({ theme }) => theme.fontSize.text2XL};
      }
    }
  }
`;

const NewsListElement = () => (
  <StyledArticle className="news-article">
    <div className="flex-wrapper">
      <Link href="/aktualnosci/post">
        <a>
          <div className="news-article__img-wrapper"></div>
        </a>
      </Link>
      <div className="news-article__lead">
        <Link href="/aktualnosci/post">
          <a className="news-article__heading">
            <h3>Wycieczka do Hajduszoboszlo</h3>
          </a>
        </Link>
        <p className="news-article__paragraph">Krotki paragraf opisujacy po krótce temat posta, lub zawierajacy słowa kluczowe tematyki wpisu. </p>
        <Link href="/aktualnosci/post">
          <a className="news-article__read-more">
            Czytaj cały post <BiRightArrowAlt />
          </a>
        </Link>
      </div>
    </div>
  </StyledArticle>
);

export default NewsListElement;
