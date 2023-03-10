import { ContactSection } from 'modules/kontakt/ContactSection/ContactSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO } from 'graphql/queries';
import { ContactInfoDataAttributes, ContactInfoResponse } from 'types/contactDataResponse';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { client } from '../../graphql/apolloClient';
import { NextPage } from 'next';
import Head from 'next/head';

type PageProps = {
  contactInfo: ContactInfoDataAttributes;
  headmasterName: string;
};

const Contact: NextPage<PageProps> = ({ contactInfo, headmasterName }) => (
  <>
    <Head>
      <title>Żłobek Miejski w Krasnystawie - kontakt</title>
    </Head>
    <ContactDataProvider contactData={contactInfo}>
      <SecondaryTemplate heading="Skontaktuj się z nami">
        <ContactSection headmasterName={headmasterName} />
      </SecondaryTemplate>
    </ContactDataProvider>
  </>
);

export default Contact;

export const getStaticProps = async () => {
  const contactInfoRes = await client.query<ContactInfoResponse>({
    query: GET_CONTACT_INFO,
    fetchPolicy: 'network-only',
  });

  const contactInfo = contactInfoRes.data.contactInfo.data.attributes;

  // const staffRes = await client.query<StaffResponse>({
  //   query: GET_STAFF_LISTS,
  //   fetchPolicy: 'network-only',
  // });

  const headmasterName = 'Beata Szydło';

  return {
    props: {
      contactInfo,
      headmasterName,
    },
    revalidate: 3600,
  };
};
