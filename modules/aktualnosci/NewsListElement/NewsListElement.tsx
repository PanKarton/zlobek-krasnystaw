import Link from 'next/link';
import { BiRightArrowAlt } from 'react-icons/bi';
import { PostAttributes } from 'types/newsPostsArray';
import { StyledArticle } from './NewsListElement.styles';

type Props = {
  postId: string;
  attributes: PostAttributes;
};

export const NewsListElement = ({ postId, attributes }: Props) => {
  console.log(attributes);
  return (
    <StyledArticle>
      <div className="flex-wrapper">
        <Link href={`/aktualnosci/${postId}`}>
          <a href="!#" className="heading">
            <h3>{attributes.title} </h3>
          </a>
        </Link>
        <p className="publishDate">czwartek, 25 lipiec 2022</p>
        <p className="content">{attributes.content}</p>
        <Link href={`/aktualnosci/${postId}`}>
          <a href="!#" className="read-more">
            Czytaj cały post <BiRightArrowAlt />
          </a>
        </Link>
      </div>
    </StyledArticle>
  );
};
