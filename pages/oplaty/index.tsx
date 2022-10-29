import SecondaryTemplate from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { getEnv } from 'helpers/getEnv';

type Props = {
  googleApiKey: string;
};

const Contact = ({ googleApiKey }: Props) => (
  <SecondaryTemplate googleApiKey={googleApiKey} heading="Informacje o opłatach">
    <section></section>
  </SecondaryTemplate>
);

export default Contact;

export async function getStaticProps() {
  const googleApiKey = getEnv(process.env.GOOGLE_MAPS_API_KEY);
  return {
    props: {
      googleApiKey,
    },
  };
}
