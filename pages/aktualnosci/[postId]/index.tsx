import SecondaryTemplate from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { useRouter } from 'next/router';
import { news } from 'mock-data';
import NewsPost from 'Components/Organisms/NewsPost/NewsPost';
const News = () => {
  const router = useRouter();
  // =====================
  const postId = router.query.postId;
  const article = news.find((article) => article.id === postId);
  // =====================

  return (
    <>
      {article && (
        <SecondaryTemplate heading={article.title}>
          <NewsPost articleData={article} />
        </SecondaryTemplate>
      )}{' '}
    </>
  );
};

export default News;
