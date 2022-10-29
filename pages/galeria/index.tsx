import SecondaryTemplate from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { getEnv } from 'helpers/getEnv';
type Props = {
  googleApiKey: string;
};

const Gallery = ({ googleApiKey }: Props) => (
  <SecondaryTemplate googleApiKey={googleApiKey} heading="Nasze zdjęcia">
    <section></section>
  </SecondaryTemplate>
);

export default Gallery;

export async function getStaticProps() {
  const googleApiKey = getEnv(process.env.GOOGLE_MAPS_API_KEY);
  return {
    props: {
      googleApiKey,
    },
  };
}
