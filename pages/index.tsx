import { AboutUsSection } from 'modules/index/AboutUsSection/AboutUsSection';
import { NurseryDescription } from 'modules/index/NurseryDescription/NurseryDescription';
import { OurValues } from 'modules/index/OurValues/OurValues';
import { StaffSection } from 'modules/index/StaffSection/StaffSection';
import { HomeTemplate } from '../Components/Templates/HomeTemplate/HomeTemplate';

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
