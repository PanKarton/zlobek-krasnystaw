import { ErrorPageSection } from 'modules/404/ErrorPageSection/ErrorPageSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO } from 'graphql/queries';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactInfoDataAttributes, ContactInfoResponse } from 'types/contactDataResponse';
import { client } from '../graphql/apolloClient';
import { NextPage } from 'next';
import Head from 'next/head';

type PageProps = {
  contactInfo: ContactInfoDataAttributes;
};

const ErrorPage: NextPage<PageProps> = ({ contactInfo }) => (
  <>
    <Head>
      <title>Żłobek Miejski w Krasnystawie - nie znaleziono strony</title>
    </Head>
    <ContactDataProvider contactData={contactInfo}>
      <SecondaryTemplate>
        <ErrorPageSection />
      </SecondaryTemplate>
    </ContactDataProvider>
  </>
);

export default ErrorPage;

export const getStaticProps = async () => {
  const ContactInfo = await client.query<ContactInfoResponse>({
    query: GET_CONTACT_INFO,
    fetchPolicy: 'network-only',
  });

  const contactInfo = ContactInfo.data.contactInfo.data.attributes;

  return {
    props: {
      contactInfo,
    },
    revalidate: 3600,
  };
};
