import { ContactSection } from 'modules/kontakt/ContactSection/ContactSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO } from 'graphql/queries';
import { ContactInfo } from 'types/contactData';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { client } from '../../graphql/apolloClient';
import { GetStaticProps } from 'next';

type Props = {
  contactInfo: ContactInfo;
};

const Contact = ({ contactInfo }: Props) => (
  <ContactDataProvider contactData={contactInfo}>
    <SecondaryTemplate heading="Skontaktuj się z nami">
      <ContactSection />
    </SecondaryTemplate>
  </ContactDataProvider>
);

export default Contact;
export const getStaticProps: GetStaticProps = async () => {
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
