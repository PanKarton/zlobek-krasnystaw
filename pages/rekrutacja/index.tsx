import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO } from 'graphql/queries';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactInfo } from 'types/contactData';
import { client } from '../../graphql/apolloClient';

type Props = {
  contactInfo: ContactInfo;
};

const Recruitment = ({ contactInfo }: Props) => (
  <ContactDataProvider contactData={contactInfo}>
    <SecondaryTemplate heading="Informacje o rekrutacji">
      <section></section>
    </SecondaryTemplate>
  </ContactDataProvider>
);

export default Recruitment;

export const getStaticProps = async () => {
  const ContactInfo = await client.query({
    query: GET_CONTACT_INFO,
  });

  const contactInfo = ContactInfo.data.contactInfo.data.attributes;

  return {
    props: {
      contactInfo,
    },
  };
};
