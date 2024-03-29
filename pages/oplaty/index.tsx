import { FeesSection } from 'modules/oplaty/FeesSection/FeesSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO, GET_FEES } from 'graphql/queries';
import { FeesDataAttributes, FeesResponse } from 'types/feesResponse';
import { ContactInfoDataAttributes, ContactInfoResponse } from 'types/contactDataResponse';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { client } from '../../graphql/apolloClient';
import Head from 'next/head';

interface Props {
  fees: FeesDataAttributes;
  contactInfo: ContactInfoDataAttributes;
}

const Fees = ({ fees, contactInfo }: Props) => {
  return (
    <>
      <Head>
        <title>Żłobek Miejski w Krasnystawie - opłaty</title>
      </Head>
      <ContactDataProvider contactData={contactInfo}>
        <SecondaryTemplate heading="Cennik">
          <FeesSection feesData={fees} />
        </SecondaryTemplate>
      </ContactDataProvider>
    </>
  );
};

export default Fees;

export const getStaticProps = async () => {
  const feesRes = await client.query<FeesResponse>({
    query: GET_FEES,
    fetchPolicy: 'network-only',
  });

  const fees = feesRes.data.fee.data.attributes;

  const ContactInfo = await client.query<ContactInfoResponse>({
    query: GET_CONTACT_INFO,
    fetchPolicy: 'network-only',
  });

  const contactInfo = ContactInfo.data.contactInfo.data.attributes;

  return {
    props: {
      fees,
      contactInfo,
    },
    revalidate: 3600,
  };
};
