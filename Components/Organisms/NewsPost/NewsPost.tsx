import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import { StyledArticle, StyledWrapper } from './NewsPost.styles';

type Props = {
  articleData: {
    id: string;
    title: string;
    subTitle: string;
    imgUrl?: string;
    content: string[];
    date: {
      day: string;
      dayNum: string;
      month: string;
      year: string;
      dateMs: number;
    };
  };
};
export const NewsPost = ({ articleData }: Props) => (
  <SectionWithStars>
    <StyledWrapper>
      <StyledArticle>
        <p className="date">{`${articleData.date.day}, ${articleData.date.dayNum} ${articleData.date.month} ${articleData.date.year}`}</p>
        <div className="flex-wrapper">
          {articleData.imgUrl && <div className="img-wrapper"></div>}
          <div className="content-wrapper">
            {articleData.content.map((paragraph: string, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </StyledArticle>
    </StyledWrapper>
  </SectionWithStars>
);
