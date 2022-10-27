import SecondaryTemplate from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { useRouter } from 'next/router';
import { news } from 'mock-data';
import NewsSection from 'Components/Molecules/NewsSection/NewsSection';

const News = () => {
  const router = useRouter();
  const postId = router.query.postId;
  const article = news.find((article) => article.id === postId);

  return (
    article && (
      <SecondaryTemplate heading={article.title}>
        <NewsSection articleData={article} />
      </SecondaryTemplate>
    )
  );
};

export default News;
