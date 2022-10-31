import SecondaryTemplate from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { getEnv } from 'helpers/getEnv';
import { getEnvVariable } from 'helpers/getEnvVariable';

type Props = {
  googleApiKey: string;
};
const News = ({ googleApiKey }: Props) => (
  <SecondaryTemplate googleApiKey={googleApiKey} heading="Jadłospis">
    <p></p>
  </SecondaryTemplate>
);

export default News;

export async function getStaticProps() {
  const nodeEnv = getEnv('NODE_ENV');

  let googleApiKey = '';
  if (nodeEnv === 'development') {
    googleApiKey = getEnvVariable(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
  } else if (nodeEnv === 'production') {
    googleApiKey = getEnvVariable(process.env.GOOGLE_MAPS_API_KEY);
  }

  return {
    props: {
      googleApiKey,
    },
  };
}
