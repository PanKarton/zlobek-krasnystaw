import { RodoSection } from 'modules/rodo/RodoSection/RodoSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO } from 'graphql/queries';
import { ContactInfoDataAttributes, ContactInfoResponse } from 'types/contactDataResponse';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { client } from '../../graphql/apolloClient';
import { GetStaticProps } from 'next';

type Props = {
  contactInfo: ContactInfoDataAttributes;
};

const GDPR = ({ contactInfo }: Props) => (
  <ContactDataProvider contactData={contactInfo}>
    <SecondaryTemplate heading="Ochrona danych osobowych">
      <RodoSection />
    </SecondaryTemplate>
  </ContactDataProvider>
);

export default GDPR;

export const getStaticProps: GetStaticProps = async () => {
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
