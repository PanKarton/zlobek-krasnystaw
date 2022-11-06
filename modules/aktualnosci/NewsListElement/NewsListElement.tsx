import Link from 'next/link';
import { BiRightArrowAlt } from 'react-icons/bi';
import { StyledArticle } from './NewsListElement.styles';

type Props = {
  postId: string;
};

export const NewsListElement = ({ postId }: Props) => (
  <StyledArticle className="news-article">
    <div className="flex-wrapper">
      <Link href={`/aktualnosci/${postId}`}>
        <a href="!#">
          <div className="news-article__img-wrapper"></div>
        </a>
      </Link>
      <div className="news-article__lead">
        <Link href={`/aktualnosci/${postId}`}>
          <a href="!#" className="news-article__heading">
            <h3>Wycieczka do Hajduszoboszlo </h3>
          </a>
        </Link>
        <p className="news-article__paragraph">Krotki paragraf opisujacy po krótce temat posta, lub zawierajacy słowa kluczowe tematyki wpisu. </p>
        <Link href={`/aktualnosci/${postId}`}>
          <a href="!#" className="news-article__read-more">
            Czytaj cały post <BiRightArrowAlt />
          </a>
        </Link>
      </div>
    </div>
  </StyledArticle>
);
