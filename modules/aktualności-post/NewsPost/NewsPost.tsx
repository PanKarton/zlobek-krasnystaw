import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import { buildURL } from 'helpers/buildURL';
import { formatDate } from 'helpers/formatDate';
import { getDayName } from 'helpers/getDayName';
import Image from 'next/image';
import { Post } from 'types/newsPosts';
import { StyledArticle, StyledWrapper } from './NewsPost.styles';

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
          <p className="publishDate">{`${dayName}, ${formatedDate}`}</p>
          <div className="flex-wrapper">
            {imageData?.attributes && (
              <div className="img-wrapper">
                <Image src={buildURL(imageData?.attributes.url)} alt={imageData?.attributes?.alternativeText} layout="fill" />
              </div>
            )}
            <p className="content">{articleData.attributes.content}</p>
          </div>
        </StyledArticle>
      </StyledWrapper>
    </SectionWithStars>
  );
};
