import SecondaryTemplate from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { useRouter } from 'next/router';
import { news } from 'mock-data';
import { StyledArticle, StyledSection } from './index.styles';
import StarsBackground from 'Components/Atoms/StarsBackground/StarsBackground';
const News = () => {
  const router = useRouter();
  // =====================
  const postId = router.query.postId;
  const article = news.find((article) => article.id === postId);

  // =====================

  return (
    article && (
      <SecondaryTemplate heading={article.title}>
        <StyledSection>
          <StarsBackground>
            <div className="flex-wrapper max-width-1440">
              <StyledArticle>
                <p className="date">{`${article.date.day}, ${article.date.dayNum} ${article.date.month} ${article.date.year}`}</p>
                <div className="flex-wrapper">
                  {article.imgUrl && <div className="img-wrapper"></div>}
                  <div className="content-wrapper">
                    {article.content.map((paragraph: string, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </StyledArticle>
            </div>
          </StarsBackground>
        </StyledSection>
      </SecondaryTemplate>
    )
  );
};

export default News;
