import { LayetteSection } from 'modules/wyprawka/LayetteSection/LayetteSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_LAYETTE } from 'graphql/queries';
import { Props } from 'types/layette';

const Layette = ({ layette }: Props) => {
  return (
    <SecondaryTemplate heading="Wyprawka">
      <LayetteSection layette={layette} />
    </SecondaryTemplate>
  );
};

export default Layette;

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
  });

  const {
    data: { layette },
  } = await client.query({
    query: GET_LAYETTE,
  });

  return {
    props: {
      layette,
    },
  };
};
