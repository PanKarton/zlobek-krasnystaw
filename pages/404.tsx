import { ErrorPageSection } from 'modules/404/ErrorPageSection/ErrorPageSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO } from 'graphql/queries';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactInfoDataAttributes, ContactInfoResponse } from 'types/contactDataResponse';
import { client } from '../graphql/apolloClient';
import { NextPage } from 'next';

type PageProps = {
  contactInfo: ContactInfoDataAttributes;
};

const ErrorPage: NextPage<PageProps> = ({ contactInfo }) => (
  <ContactDataProvider contactData={contactInfo}>
    <SecondaryTemplate>
      <ErrorPageSection />
    </SecondaryTemplate>
  </ContactDataProvider>
);

export default ErrorPage;

export const getStaticProps = async () => {
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
