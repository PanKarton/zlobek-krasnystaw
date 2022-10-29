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
  const googleApiKey = process.env.CZESC;
  console.log(`Google klucz api to =======> ${googleApiKey}`);
  const testVariable = process.env.TEST_VARIABLE;
  console.log(`Google klucz api to =======> ${testVariable}`);
  return {
    props: {
      googleApiKey,
    },
  };
}
