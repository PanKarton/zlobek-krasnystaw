import AboutUsSection from 'Components/Organisms/AboutUsSection/AboutUsSection';
import NurseryDescription from 'Components/Organisms/NurseryDescription/NurseryDescription';
import OurValues from 'Components/Organisms/OurValues/OurValues';
import StaffSection from 'Components/Organisms/StaffSection/StaffSection';
import { getEnv } from 'helpers/getEnv';
import { getEnvVariable } from 'helpers/getEnvVariable';
import HomeTemplate from '../Components/Templates/HomeTemplate/HomeTemplate';

type Props = {
  googleApiKey: string;
};

export default function Home({ googleApiKey }: Props) {
  console.log(googleApiKey);

  return (
    <>
      <HomeTemplate googleApiKey={googleApiKey}>
        <OurValues />
        <AboutUsSection />
        <StaffSection />
        <NurseryDescription />
      </HomeTemplate>
    </>
  );
}

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
