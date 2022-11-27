import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import { formatDate } from 'helpers/formatDate';
import { getDayName } from 'helpers/getDayName';
import { Post } from 'types/newsPosts';
import { StyledArticle, StyledWrapper } from './NewsPost.styles';

type Props = {
  articleData: Post;
};

export const NewsPost = ({ articleData }: Props) => {
  const formatedDate = formatDate(articleData.attributes.publishedAt);
  const dayName = getDayName(articleData.attributes.publishedAt);

  const isImage = articleData.attributes.image.data?.length === 1;

  return (
    <SectionWithStars>
      <StyledWrapper>
        <StyledArticle>
          <p className="date">{`${dayName}, ${formatedDate}`}</p>
          <div className="flex-wrapper">
            {isImage && <div className="img-wrapper"></div>}
            <div className="content-wrapper">{articleData.attributes.content}</div>
          </div>
        </StyledArticle>
      </StyledWrapper>
    </SectionWithStars>
  );
};
