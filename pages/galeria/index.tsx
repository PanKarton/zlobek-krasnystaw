import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO } from 'graphql/queries';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactInfo } from 'types/contactData';
import { client } from '../../graphql/apolloClient';

type Props = {
  contactInfo: ContactInfo;
};

const Gallery = ({ contactInfo }: Props) => (
  <ContactDataProvider contactData={contactInfo}>
    <SecondaryTemplate heading="Nasze zdjęcia">
      <section></section>
    </SecondaryTemplate>
  </ContactDataProvider>
);

export default Gallery;

export const getStaticProps = async () => {
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
