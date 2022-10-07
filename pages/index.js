import AboutUsSection from 'Components/Organisms/AboutUsSection/AboutUsSection';
import NurseryDescription from 'Components/Organisms/NurseryDescription/NurseryDescription';
import OurValues from 'Components/Organisms/OurValues/OurValues';
import StaffSection from 'Components/Organisms/StaffSection/StaffSection';
import HomeTemplate from '../Components/Templates/HomeTemplate/HomeTemplate';

export default function Home() {
  return (
    <>
      <HomeTemplate>
        <OurValues />
        <AboutUsSection />
        <StaffSection />
        <NurseryDescription />
      </HomeTemplate>
    </>
  );
}
