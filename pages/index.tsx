import AboutUsSection from 'Components/Organisms/AboutUsSection/AboutUsSection';
import NurseryDescription from 'Components/Organisms/NurseryDescription/NurseryDescription';
import OurValues from 'Components/Organisms/OurValues/OurValues';
import StaffSection from 'Components/Organisms/StaffSection/StaffSection';
import { getEnv } from 'helpers/getEnv';
import HomeTemplate from '../Components/Templates/HomeTemplate/HomeTemplate';

type Props = {
  googleApiKey: string;
};

export default function Home({ googleApiKey }: Props) {
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
  const googleApiKey = getEnv(process.env.CZESC);
  console.log(`Google klucz api to =======> ${googleApiKey}`);
  return {
    props: {
      googleApiKey,
    },
  };
}
