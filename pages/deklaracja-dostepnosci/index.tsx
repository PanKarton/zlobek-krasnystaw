import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO } from 'graphql/queries';
import { ContactInfoDataAttributes, ContactInfoResponse } from 'types/contactDataResponse';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { client } from '../../graphql/apolloClient';
import { NextPage } from 'next';
import Head from 'next/head';
import { AccessibilityDeclarationSection } from 'modules/deklaracja-dostepnosci/AccessibilityDeclarationSection/AccessibilityDeclarationSection';

type PageProps = {
  contactInfo: ContactInfoDataAttributes;
};

const AccesibilityDeclaration: NextPage<PageProps> = ({ contactInfo }) => (
  <>
    <Head>
      <title>Żłobek Miejski w Krasnystawie - deklaracja dostepności</title>
    </Head>
    <ContactDataProvider contactData={contactInfo}>
      <SecondaryTemplate heading="Deklaracja dostępności">
        <AccessibilityDeclarationSection />
      </SecondaryTemplate>
    </ContactDataProvider>
  </>
);

export default AccesibilityDeclaration;

export const getStaticProps = async () => {
  const contactInfoRes = await client.query<ContactInfoResponse>({
    query: GET_CONTACT_INFO,
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
