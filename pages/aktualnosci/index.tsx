import NewsListSection from 'Components/Organisms/NewsListSection/NewsListSection';
import SecondaryTemplate from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { getEnv } from 'helpers/getEnv';

type Props = {
  googleApiKey: string;
};

const News = ({ googleApiKey }: Props) => {
  return (
    <SecondaryTemplate googleApiKey={googleApiKey} heading="Nasze nowości">
      <NewsListSection />
    </SecondaryTemplate>
  );
};

export default News;

export async function getStaticProps() {
  const googleApiKey = getEnv(process.env.GOOGLE_MAPS_API_KEY);
  return {
    props: {
      googleApiKey,
    },
  };
}
