import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO } from 'graphql/queries';
import { GalleryGroupsSection } from 'modules/galeria/GalleryGroupsSection/GalleryGroupsSection';
import { GetStaticProps } from 'next';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactInfoDataAttributes, ContactInfoResponse } from 'types/contactDataResponse';
import { client } from '../../graphql/apolloClient';

type Props = {
  contactInfo: ContactInfoDataAttributes;
};

const Gallery = ({ contactInfo }: Props) => (
  <ContactDataProvider contactData={contactInfo}>
    <SecondaryTemplate heading="Nasze zdjęcia">
      <GalleryGroupsSection />
    </SecondaryTemplate>
  </ContactDataProvider>
);

export default Gallery;

export const getStaticProps: GetStaticProps = async () => {
  const contactInfoRes = await client.query<ContactInfoResponse>({
    query: GET_CONTACT_INFO,
  });

  const contactInfo = contactInfoRes.data.contactInfo.data.attributes;

  return {
    props: {
      contactInfo,
    },
  };
};
