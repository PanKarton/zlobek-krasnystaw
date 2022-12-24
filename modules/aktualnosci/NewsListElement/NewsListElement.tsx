import { formatDate } from 'helpers/formatDate';
import { getDayName } from 'helpers/getDayName';
import Link from 'next/link';
import { BiRightArrowAlt } from 'react-icons/bi';
import ReactMarkdown from 'react-markdown';
import { NewsPostDataAttributes } from 'types/newsPostResponse';
import { StyledArticle } from './NewsListElement.styles';

type Props = {
  postId: string;
  attributes: NewsPostDataAttributes;
};

export const NewsListElement = ({ postId, attributes }: Props) => {
  const formatedDate = formatDate(attributes.publishedAt);
  const dayName = getDayName(attributes.publishedAt);

  return (
    <StyledArticle>
      <div className="flex-wrapper">
        <Link href={`/aktualnosci/post/${postId}`}>
          <h3 className="heading">{attributes.title} </h3>
        </Link>
        <p className="publishDate">{`${dayName}, ${formatedDate}`}</p>
        <ReactMarkdown className="content">{attributes.content}</ReactMarkdown>
        <Link href={`/aktualnosci/post/${postId}`}>
          <span className="read-more">
            Czytaj cały post <BiRightArrowAlt />
          </span>
        </Link>
      </div>
    </StyledArticle>
  );
};
