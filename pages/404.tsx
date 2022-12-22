import { ErrorPageSection } from 'modules/404/ErrorPageSection/ErrorPageSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO } from 'graphql/queries';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactInfoDataAttributes, ContactInfoResponse } from 'types/contactData';
import { client } from '../graphql/apolloClient';
import { GetStaticProps } from 'next';

type Props = {
  contactInfo: ContactInfoDataAttributes;
};

const ErrorPage = ({ contactInfo }: Props) => (
  <ContactDataProvider contactData={contactInfo}>
    <SecondaryTemplate>
      <ErrorPageSection />
    </SecondaryTemplate>
  </ContactDataProvider>
);

export default ErrorPage;

export const getStaticProps: GetStaticProps = async () => {
  const ContactInfo = await client.query<ContactInfoResponse>({
    query: GET_CONTACT_INFO,
  });

  const contactInfo = ContactInfo.data.contactInfo.data.attributes;

  return {
    props: {
      contactInfo,
    },
  };
};
