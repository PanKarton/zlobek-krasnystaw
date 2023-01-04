import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO } from 'graphql/queries';
import { RecruitmentPageSection } from 'modules/rekrutacja/RecruitmentPageSection/RecruitmentPageSection';
import { NextPage } from 'next';

import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactInfoDataAttributes, ContactInfoResponse } from 'types/contactDataResponse';
import { client } from '../../graphql/apolloClient';

type PageProps = {
  contactInfo: ContactInfoDataAttributes;
};

const Recruitment: NextPage<PageProps> = ({ contactInfo }) => (
  <ContactDataProvider contactData={contactInfo}>
    <SecondaryTemplate heading="Informacje o rekrutacji">
      <RecruitmentPageSection/>
    </SecondaryTemplate>
  </ContactDataProvider>
);

export default Recruitment;

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
