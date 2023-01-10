import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import { buildURL } from 'helpers/buildURL';
import { formatDate } from 'helpers/formatDate';
import { getDayName } from 'helpers/getDayName';
import Image from 'next/image';
import { NewsPostData } from 'types/newsPostResponse';
import { StyledArticle, StyledWrapper } from './NewsPost.styles';
import ReactMarkdown from 'react-markdown';
import { ReturnAnchor } from 'Components/Atoms/ReturnAnchor/ReturnAnchor';

type Props = {
  articleData: NewsPostData;
};

export const NewsPost = ({ articleData }: Props) => {
  const formatedDate = formatDate(articleData.attributes.publishedAt);
  const dayName = getDayName(articleData.attributes.publishedAt);

  const imageData = articleData.attributes.opcjonalneZdjecie.data?.[0];

  return (
    <SectionWithStars>
      <StyledWrapper>
        <StyledArticle>
          <div className="publish-date-wrapper">
            <p className="publish-date">{`${dayName}, ${formatedDate}`}</p>
            <ReturnAnchor href="/aktualnosci" />
          </div>
          <div className="flex-wrapper">
            {imageData?.attributes && (
              <div className="img-wrapper">
                <Image
                  src={buildURL(imageData?.attributes.url)}
                  alt={imageData?.attributes?.alternativeText}
                  fill
                  sizes="(max-width: 1000px) 100vw, 340px"
                />
              </div>
            )}
            <ReactMarkdown className="content">{articleData.attributes.tresc}</ReactMarkdown>
          </div>
        </StyledArticle>
      </StyledWrapper>
    </SectionWithStars>
  );
};
