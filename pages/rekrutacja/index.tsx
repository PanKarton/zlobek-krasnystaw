import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO } from 'graphql/queries';
import { RecruitmentPageSection } from 'modules/rekrutacja/RecruitmentPageSection/RecruitmentPageSection';
import { GetStaticProps } from 'next';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactInfoDataAttributes, ContactInfoResponse } from 'types/contactData';
import { client } from '../../graphql/apolloClient';

type Props = {
  contactInfo: ContactInfoDataAttributes;
};

const Recruitment = ({ contactInfo }: Props) => (
  <ContactDataProvider contactData={contactInfo}>
    <SecondaryTemplate heading="Informacje o rekrutacji">
      <RecruitmentPageSection></RecruitmentPageSection>
    </SecondaryTemplate>
  </ContactDataProvider>
);

export default Recruitment;

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
