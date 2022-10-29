import NewsListSection from 'Components/Organisms/NewsListSection/NewsListSection';
import SecondaryTemplate from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';

const News = () => {
  return (
    <SecondaryTemplate heading="Nasze nowości">
      <NewsListSection />
    </SecondaryTemplate>
  );
};

export default News;

export async function getStaticProps() {
  const googleApiKey = process.env.GOOGLE_MAPS_API_KEY;
  console.log(`Google klucz api to =======> ${googleApiKey}`);
  return {
    props: {
      googleApiKey,
    },
  };
}
