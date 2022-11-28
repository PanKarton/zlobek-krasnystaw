import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_CONTACT_INFO } from 'graphql/queries';
import { getEnvVariable } from 'helpers/getEnvVariable';
import { AboutUsSection } from 'modules/index/AboutUsSection/AboutUsSection';
import { NurseryDescription } from 'modules/index/NurseryDescription/NurseryDescription';
import { OurValues } from 'modules/index/OurValues/OurValues';
import { StaffSection } from 'modules/index/StaffSection/StaffSection';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactInfo } from 'types/contactData';
import { HomeTemplate } from '../Components/Templates/HomeTemplate/HomeTemplate';

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

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: getEnvVariable(process.env.NEXT_PUBLIC_STRAPI_URL),
    cache: new InMemoryCache(),
  });

  const ContactInfoRes = await client.query({
    query: GET_CONTACT_INFO,
  });

  const contactInfo = ContactInfoRes.data.contactInfo.data.attributes;

  return {
    props: {
      contactInfo,
    },
  };
};
