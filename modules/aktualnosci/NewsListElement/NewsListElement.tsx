import { formatDate } from 'helpers/formatDate';
import { getDayName } from 'helpers/getDayName';
import Link from 'next/link';
import { BiRightArrowAlt } from 'react-icons/bi';
import ReactMarkdown from 'react-markdown';
import { NewsPostDataAttributes } from 'types/newsPostResponse';
import { StyledArticle } from './NewsListElement.styles';
import { ScreenReaderMessage } from 'Components/Atoms/ScreenReaderMessage/ScreenReaderMessage';

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
          <h3 className="heading">{attributes.tytul} </h3>
        </Link>
        <p className="publishDate">{`${dayName}, ${formatedDate}`}</p>
        <ReactMarkdown className="content">{attributes.tresc}</ReactMarkdown>
        <Link href={`/aktualnosci/post/${postId}`}>
          <div className="read-more">
            Czytaj cały post
            <ScreenReaderMessage>{`o tytule ${attributes.tytul}`}</ScreenReaderMessage>
            <BiRightArrowAlt />
          </div>
        </Link>
      </div>
    </StyledArticle>
  );
};
