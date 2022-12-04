import { RodoSection } from 'modules/rodo/RodoSection/RodoSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO } from 'graphql/queries';
import { ContactInfo } from 'types/contactData';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { client } from '../../graphql/apolloClient';

type Props = {
  contactInfo: ContactInfo;
};

const Contact = ({ contactInfo }: Props) => (
  <ContactDataProvider contactData={contactInfo}>
    <SecondaryTemplate heading="Ochrona danych osobowych">
      <RodoSection />
    </SecondaryTemplate>
  </ContactDataProvider>
);

export default Contact;

export const getStaticProps = async () => {
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
