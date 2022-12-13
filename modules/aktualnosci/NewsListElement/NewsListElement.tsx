import { formatDate } from 'helpers/formatDate';
import { getDayName } from 'helpers/getDayName';
import Link from 'next/link';
import { BiRightArrowAlt } from 'react-icons/bi';
import ReactMarkdown from 'react-markdown';
import { PostAttributes } from 'types/newsPostsArray';
import { StyledArticle } from './NewsListElement.styles';

type Props = {
  postId: string;
  attributes: PostAttributes;
};

export const NewsListElement = ({ postId, attributes }: Props) => {
  const formatedDate = formatDate(attributes.publishedAt);
  const dayName = getDayName(attributes.publishedAt);

  return (
    <StyledArticle>
      <div className="flex-wrapper">
        <Link href={`/aktualnosci/post/${postId}`}>
          <a href="!#" className="heading">
            <h3>{attributes.title} </h3>
          </a>
        </Link>
        <p className="publishDate">{`${dayName}, ${formatedDate}`}</p>
        <p className="content">
          <ReactMarkdown>{attributes.content}</ReactMarkdown>
        </p>
        <Link href={`/aktualnosci/post/${postId}`}>
          <a href="!#" className="read-more">
            Czytaj cały post <BiRightArrowAlt />
          </a>
        </Link>
      </div>
    </StyledArticle>
  );
};
