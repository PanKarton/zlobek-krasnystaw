import AboutUsSection from 'Components/Organisms/AboutUsSection/AboutUsSection';
import NurseryDescription from 'Components/Organisms/NurseryDescription/NurseryDescription';
import OurValues from 'Components/Organisms/OurValues/OurValues';
import TilesSection from 'Components/Organisms/TilesSection/TilesSection';
import HomeTemplate from '../Components/Templates/HomeTemplate/HomeTemplate';

export default function Home() {
  return (
    <>
      <HomeTemplate>
        <OurValues />
        <AboutUsSection />
        <TilesSection />
        <NurseryDescription />
      </HomeTemplate>
    </>
  );
}
