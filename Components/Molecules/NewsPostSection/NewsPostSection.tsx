import { StyledArticle, StyledSection } from './NewsPostSection.styles';

type Props = {
  articleData: {
    id: string;
    title: string;
    subTitle: string;
    content: string[];
    imgUrl?: string;
    date: {
      day: string;
      dayNum: string;
      month: string;
      year: string;
      dateMs: number;
    };
  };
};

const NewsPostSection = ({ articleData: { date, content, imgUrl } }: Props) => (
  <StyledSection>
    <div className="flex-wrapper max-width-1440">
      <StyledArticle>
        <p className="date">{`${date.day}, ${date.dayNum} ${date.month} ${date.year}`}</p>
        <div className="flex-wrapper">
          {imgUrl && <div className="img-wrapper"></div>}
          <div className="content-wrapper">
            {content.map((paragraph: string, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </StyledArticle>
    </div>
  </StyledSection>
);

export default NewsPostSection;
