import { FeesSection } from 'modules/oplaty/FeesSection/FeesSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_FEES } from 'graphql/queries';
import { Props } from 'types/fees';

const Fees = ({ fees }: Props) => {
  return (
    <SecondaryTemplate heading="Cennik">
      <FeesSection feesData={fees.attributes} />
    </SecondaryTemplate>
  );
};

export default Fees;

export const getStaticProps = async () => {
  // Apollo client init
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
  });

  const {
    data: { fee },
  } = await client.query({
    query: GET_FEES,
  });

  const fees = fee.data;

  return {
    props: {
      fees,
    },
  };
};
