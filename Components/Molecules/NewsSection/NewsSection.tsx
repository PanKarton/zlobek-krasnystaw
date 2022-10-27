import styled from 'styled-components';
const StyledSection = styled.section`
  padding-bottom: 5rem;
`;

const StyledArticle = styled.article`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-family: var(--font-primary);
  color: ${({ theme }) => theme.color.text.primary};
  p.date {
    font-weight: 500;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #aaa;
  }
  .flex-wrapper {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    .img-wrapper {
      background-color: #ddd;
      flex-basis: 35%;
      aspect-ratio: 1.61;
    }
  }

  /* Narrow when img exists */
  .img-wrapper + .content-wrapper {
    flex-basis: 60%;
  }

  .content-wrapper {
    flex-basis: 70%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    p {
      font-family: var(--font-primary);
      font-size: ${({ theme }) => theme.fontSize.textBase};
      line-height: ${({ theme }) => theme.lineHeight.textLG};
      font-weight: 500;
      @media screen and (min-width: 700px) {
        font-size: ${({ theme }) => theme.fontSize.textLG};
        line-height: ${({ theme }) => theme.lineHeight.text2XL};
      }
      @media screen and (min-width: 1550px) {
        font-size: ${({ theme }) => theme.fontSize.textXL};
        line-height: ${({ theme }) => theme.lineHeight.text4XL};
      }
    }
  }
`;

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

const NewsSection = ({ articleData: { title, date, content, imgUrl } }: Props) => (
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

export default NewsSection;
