import SecondaryTemplate from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { useRouter } from 'next/router';
import { news } from 'mock-data';
import NewsPostSection from 'Components/Molecules/NewsPostSection/NewsPostSection';

const News = () => {
  const router = useRouter();
  // =====================
  const postId = router.query.postId;
  const article = news.find((article) => article.id === postId);
  // =====================

  return (
    article && (
      <SecondaryTemplate heading={article.title}>
        <NewsPostSection articleData={article} />
      </SecondaryTemplate>
    )
  );
};

export default News;
