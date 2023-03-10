import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO } from 'graphql/queries';
import { GalleryGroupsSection } from 'modules/galeria/GalleryGroupsSection/GalleryGroupsSection';
import { NextPage } from 'next';
import Head from 'next/head';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactInfoDataAttributes, ContactInfoResponse } from 'types/contactDataResponse';
import { client } from '../../graphql/apolloClient';

type PageProps = {
  contactInfo: ContactInfoDataAttributes;
};

const Gallery: NextPage<PageProps> = ({ contactInfo }) => (
  <>
    <Head>
      <title>Żłobek Miejski w Krasnystawie - grupy</title>
    </Head>
    <ContactDataProvider contactData={contactInfo}>
      <SecondaryTemplate heading="Nasze zdjęcia">
        <GalleryGroupsSection />
      </SecondaryTemplate>
    </ContactDataProvider>
  </>
);

export default Gallery;

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
