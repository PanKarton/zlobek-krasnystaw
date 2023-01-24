import { GDPRSection } from 'modules/rodo/GDPRSection/GDPRSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO } from 'graphql/queries';
import { ContactInfoDataAttributes, ContactInfoResponse } from 'types/contactDataResponse';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { client } from '../../graphql/apolloClient';
import { NextPage } from 'next';
import Head from 'next/head';

type PageProps = {
  contactInfo: ContactInfoDataAttributes;
};

const GDPR: NextPage<PageProps> = ({ contactInfo }) => (
  <>
    <Head>
      <title>Żłobek Miejski w Krasnystawie - RODO</title>
    </Head>
    <ContactDataProvider contactData={contactInfo}>
      <SecondaryTemplate heading="Ochrona danych osobowych">
        <GDPRSection />
      </SecondaryTemplate>
    </ContactDataProvider>
  </>
);

export default GDPR;

export const getStaticProps = async () => {
  const ContactInfoRes = await client.query<ContactInfoResponse>({
    query: GET_CONTACT_INFO,
  });

  const contactInfo = ContactInfoRes.data.contactInfo.data.attributes;

  return {
    props: {
      contactInfo,
    },
  };
};
