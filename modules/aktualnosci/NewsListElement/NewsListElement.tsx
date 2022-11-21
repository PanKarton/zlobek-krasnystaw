import Link from 'next/link';
import { BiRightArrowAlt } from 'react-icons/bi';
import { StyledArticle } from './NewsListElement.styles';

type Props = {
  postId: string;
};

export const NewsListElement = ({ postId }: Props) => (
  <StyledArticle>
    <div className="flex-wrapper">
      <Link href={`/aktualnosci/${postId}`}>
        <a href="!#" className="heading">
          <h3>Wycieczka do Hajduszoboszlo </h3>
        </a>
      </Link>
      <p className="publishDate">czwartek, 25 lipiec 2022</p>
      <p className="content">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
        inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
        aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
        dolor sit amet, consectetur{' '}
      </p>
      <Link href={`/aktualnosci/${postId}`}>
        <a href="!#" className="read-more">
          Czytaj cały post <BiRightArrowAlt />
        </a>
      </Link>
    </div>
  </StyledArticle>
);
