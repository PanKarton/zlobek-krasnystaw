import NewsListSection from 'Components/Organisms/NewsListSection/NewsListSection';
import SecondaryTemplate from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { getEnv } from 'helpers/getEnv';

const News = (googleApiKey: string) => (
  <SecondaryTemplate heading="Nasze nowości">
    <p>{googleApiKey}</p>
    <NewsListSection />
  </SecondaryTemplate>
);

export default News;

export async function getStaticProps() {
  const googleApiKey = getEnv(process.env.GOOGLE_MAPS_API_KEY);

  return {
    props: {
      googleApiKey,
    },
  };
}
