import SecondaryTemplate from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { getEnv } from 'helpers/getEnv';

type Props = {
  googleApiKey: string;
};

const Documents = ({ googleApiKey }: Props) => (
  <SecondaryTemplate googleApiKey={googleApiKey} heading="Dokumenty do pobrania">
    <section></section>
  </SecondaryTemplate>
);

export default Documents;

export async function getStaticProps() {
  const googleApiKey = getEnv(process.env.CZESC);
  console.log(`Google klucz api to =======> ${googleApiKey}`);
  return {
    props: {
      googleApiKey,
    },
  };
}
