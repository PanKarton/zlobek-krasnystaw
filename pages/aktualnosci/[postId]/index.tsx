import SecondaryTemplate from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { useRouter } from 'next/router';

const News = () => {
  const router = useRouter();
  const postId = router.query.postId;

  return (
    <SecondaryTemplate heading="Nasze nowości">
      <p>{postId}</p>
    </SecondaryTemplate>
  );
};

export default News;
