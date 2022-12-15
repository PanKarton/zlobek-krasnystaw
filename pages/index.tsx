import { GET_CONTACT_INFO } from 'graphql/queries';
import { AboutUsSection } from 'modules/index/AboutUsSection/AboutUsSection';
import { NurseryDescription } from 'modules/index/NurseryDescription/NurseryDescription';
import { OurValues } from 'modules/index/OurValues/OurValues';
import { StaffSection } from 'modules/index/StaffSection/StaffSection';
import { GetStaticProps } from 'next';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactInfo } from 'types/contactData';
import { HomeTemplate } from '../Components/Templates/HomeTemplate/HomeTemplate';
import { client } from '../graphql/apolloClient';

type Props = {
  contactInfo: ContactInfo;
};

const Home = ({ contactInfo }: Props) => {
  return (
    <>
      <ContactDataProvider contactData={contactInfo}>
        <HomeTemplate>
          <OurValues />
          <AboutUsSection />
          <StaffSection />
          <NurseryDescription />
        </HomeTemplate>
      </ContactDataProvider>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const contactInfoRes = await client.query({
    query: GET_CONTACT_INFO,
  });

  const contactInfo = contactInfoRes.data.contactInfo.data.attributes;

  return {
    props: {
      contactInfo,
    },
  };
};
