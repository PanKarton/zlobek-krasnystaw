import AboutUsSection from 'Components/Organisms/AboutUsSection/AboutUsSection';
import OurValues from 'Components/Organisms/OurValues/OurValues';
import HomeTemplate from '../Components/Templates/HomeTemplate/HomeTemplate';

export default function Home() {
  return (
    <>
      
      <HomeTemplate>
        <OurValues />
        <AboutUsSection />
      </HomeTemplate>
    </>
  );
}
