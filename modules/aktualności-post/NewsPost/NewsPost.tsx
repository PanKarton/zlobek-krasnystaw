import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import { buildURL } from 'helpers/buildURL';
import { formatDate } from 'helpers/formatDate';
import { getDayName } from 'helpers/getDayName';
import Image from 'next/image';
import { Post } from 'types/newsPosts';
import { StyledArticle, StyledWrapper } from './NewsPost.styles';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

type Props = {
  articleData: Post;
};

export const NewsPost = ({ articleData }: Props) => {
  const formatedDate = formatDate(articleData.attributes.publishedAt);
  const dayName = getDayName(articleData.attributes.publishedAt);

  const imageData = articleData.attributes.image.data?.[0];

  return (
    <SectionWithStars>
      <StyledWrapper>
        <StyledArticle>
          <div className="publish-date-wrapper">
            <p className="publish-date">{`${dayName}, ${formatedDate}`}</p>
            <Link href="/aktualnosci" passHref>
              <a href="!#">
                <span className="return-anchor">Cofnij</span>
              </a>
            </Link>
          </div>
          <div className="flex-wrapper">
            {imageData?.attributes && (
              <div className="img-wrapper">
                <Image src={buildURL(imageData?.attributes.url)} alt={imageData?.attributes?.alternativeText} layout="fill" />
              </div>
            )}
            <p className="content">
              <ReactMarkdown>{articleData.attributes.content}</ReactMarkdown>
            </p>
          </div>
        </StyledArticle>
      </StyledWrapper>
    </SectionWithStars>
  );
};
