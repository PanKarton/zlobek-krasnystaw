import NewsListSection from 'Components/Organisms/NewsListSection/NewsListSection';
import SecondaryTemplate from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { getEnv } from 'helpers/getEnv';

const News = (googleApiKey: string) => {
  return (
    <SecondaryTemplate heading="Nasze nowości">
      <p>{googleApiKey}</p>
      <NewsListSection />
    </SecondaryTemplate>
  );
};

export default News;

export async function getStaticProps() {
  const googleApiKey = getEnv(process.env.CZESC);
  console.log(`Google klucz api to =======> ${googleApiKey}`);
  return {
    props: {
      googleApiKey,
    },
  };
}
