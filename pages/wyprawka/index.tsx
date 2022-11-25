import { LayetteSection } from 'modules/wyprawka/LayetteSection/LayetteSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_CONTACT_INFO, GET_LAYETTE } from 'graphql/queries';
import { LayetteResponse } from 'types/layette';
import { getEnvVariable } from 'helpers/getEnvVariable';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactDataResponse } from 'types/contactData';

type Props = {
  layette: LayetteResponse;
  contactInfo: ContactDataResponse;
};

const Layette = ({ layette, contactInfo }: Props) => {
  return (
    <ContactDataProvider contactData={contactInfo}>
      <SecondaryTemplate heading="Wyprawka">
        <LayetteSection layette={layette} />
      </SecondaryTemplate>
    </ContactDataProvider>
  );
};

export default Layette;

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: getEnvVariable(process.env.NEXT_PUBLIC_STRAPI_URL),
    cache: new InMemoryCache(),
  });

  const {
    data: { layette },
  } = await client.query({
    query: GET_LAYETTE,
  });

  const { data: contactInfo } = await client.query({
    query: GET_CONTACT_INFO,
  });

  return {
    props: {
      layette,
      contactInfo,
    },
  };
};
