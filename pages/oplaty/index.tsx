import { FeesSection } from 'modules/oplaty/FeesSection/FeesSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO, GET_FEES } from 'graphql/queries';
import { FeesResponse } from 'types/fees';
import { ContactInfo } from 'types/contactData';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { client } from '../../graphql/apolloClient';

export interface Props {
  fees: FeesResponse;
  contactInfo: ContactInfo;
}

const Fees = ({ fees, contactInfo }: Props) => {
  return (
    <ContactDataProvider contactData={contactInfo}>
      <SecondaryTemplate heading="Cennik">
        <FeesSection feesData={fees.attributes} />
      </SecondaryTemplate>
    </ContactDataProvider>
  );
};

export default Fees;

export const getStaticProps = async () => {
  const feesRes = await client.query({
    query: GET_FEES,
  });

  const fees = feesRes.data.fee;

  const ContactInfo = await client.query({
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
