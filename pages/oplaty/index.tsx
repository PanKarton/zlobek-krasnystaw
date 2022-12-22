import { FeesSection } from 'modules/oplaty/FeesSection/FeesSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO, GET_FEES } from 'graphql/queries';
import { FeesDataAttributes, FeesResponse } from 'types/feesResponse';
import { ContactInfoDataAttributes, ContactInfoResponse } from 'types/contactDataResponse';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { client } from '../../graphql/apolloClient';
import { GetStaticProps } from 'next';

export interface Props {
  fees: FeesDataAttributes;
  contactInfo: ContactInfoDataAttributes;
}

const Fees = ({ fees, contactInfo }: Props) => {
  return (
    <ContactDataProvider contactData={contactInfo}>
      <SecondaryTemplate heading="Cennik">
        <FeesSection feesData={fees} />
      </SecondaryTemplate>
    </ContactDataProvider>
  );
};

export default Fees;

export const getStaticProps: GetStaticProps = async () => {
  const feesRes = await client.query<FeesResponse>({
    query: GET_FEES,
  });

  const fees = feesRes.data.fee.data.attributes;

  const ContactInfo = await client.query<ContactInfoResponse>({
    query: GET_CONTACT_INFO,
  });

  const contactInfo = ContactInfo.data.contactInfo.data.attributes;

  return {
    props: {
      fees,
      contactInfo,
    },
  };
};
