import NewsListSection from 'Components/Organisms/NewsListSection/NewsListSection';
import SecondaryTemplate from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { getEnv } from 'helpers/getEnv';

const News = (props) => {
  console.log(props);

  return (
    <SecondaryTemplate heading="Nasze nowości">
      <NewsListSection />
    </SecondaryTemplate>
  );
};

export default News;

export async function getStaticProps() {
  const googleApiKey = process.env.GOOGLE_MAPS_API_KEY;

  return {
    props: {
      googleApiKey,
    },
  };
}
