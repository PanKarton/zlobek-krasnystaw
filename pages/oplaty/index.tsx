import { FeesSection } from 'modules/oplaty/FeesSection/FeesSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_CONTACT_INFO, GET_FEES } from 'graphql/queries';
import { FeesResponse } from 'types/fees';
import { getEnvVariable } from 'helpers/getEnvVariable';
import { ContactDataResponse } from 'types/contactData';
import { ContactDataProvider } from 'providers/ContactDataProvider';

export interface Props {
  fees: FeesResponse;
  contactInfo: ContactDataResponse;
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
  // Apollo client init
  const client = new ApolloClient({
    uri: getEnvVariable(process.env.NEXT_PUBLIC_STRAPI_URL),
    cache: new InMemoryCache(),
  });

  const {
    data: { fee },
  } = await client.query({
    query: GET_FEES,
  });

  const { data: contactInfo } = await client.query({
    query: GET_CONTACT_INFO,
  });

  const fees = fee.data;

  return {
    props: {
      fees,
      contactInfo,
    },
  };
};
