import { GET_CONTACT_INFO } from 'graphql/queries';
import { AboutUsSection } from 'modules/index/AboutUsSection/AboutUsSection';
import { NurseryDescription } from 'modules/index/NurseryDescription/NurseryDescription';
import { OurValues } from 'modules/index/OurValues/OurValues';
import { StaffSection } from 'modules/index/StaffSection/StaffSection';
import { NextPage } from 'next';
import Head from 'next/head';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactInfoDataAttributes, ContactInfoResponse } from 'types/contactDataResponse';
import { HomeTemplate } from '../Components/Templates/HomeTemplate/HomeTemplate';
import { client } from '../graphql/apolloClient';

type PageProps = {
  contactInfo: ContactInfoDataAttributes;
};

const Home: NextPage<PageProps> = ({ contactInfo }) => (
  <>
    <Head>
      <title>Żłobek Miejski w Krasnystawie</title>
    </Head>
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

export default Home;

export const getStaticProps = async () => {
  const contactInfoRes = await client.query<ContactInfoResponse>({
    query: GET_CONTACT_INFO,
    // This does unlock revalidate getting blocked by caching
    fetchPolicy: 'network-only',
  });

  const contactInfo = contactInfoRes.data.contactInfo.data.attributes;

  return {
    props: {
      contactInfo,
    },
    revalidate: 3600,
  };
};
