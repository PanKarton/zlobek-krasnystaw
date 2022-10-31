import SecondaryTemplate from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { getEnv } from 'helpers/getEnv';
import { getEnvVariable } from 'helpers/getEnvVariable';

type Props = {
  googleApiKey: string;
  value: string;
};

const Contact = ({ googleApiKey, value }: Props) => (
  <SecondaryTemplate googleApiKey={googleApiKey} heading="Informacje o opłatach">
    <section>
      <p>{value}</p>
    </section>
  </SecondaryTemplate>
);

export default Contact;

export async function getStaticProps() {
  const nodeEnv = getEnv('NODE_ENV');

  let googleApiKey = '';
  let value = '';
  if (nodeEnv === 'development') {
    googleApiKey = getEnvVariable(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
    value = getEnvVariable(process.env.NEXT_PUBLIC_A);
  } else if (nodeEnv === 'production') {
    googleApiKey = getEnvVariable(process.env.GOOGLE_MAPS_API_KEY);
    value = getEnvVariable(process.env.A);
  }

  return {
    props: {
      googleApiKey,
      value,
    },
  };
}
