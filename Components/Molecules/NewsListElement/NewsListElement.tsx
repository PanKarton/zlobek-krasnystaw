import Link from 'next/link';
import { BiRightArrowAlt } from 'react-icons/bi';
import { StyledArticle } from './NewsListElement.styles';

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
