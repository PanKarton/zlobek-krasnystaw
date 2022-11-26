import { LayetteSection } from 'modules/wyprawka/LayetteSection/LayetteSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_CONTACT_INFO, GET_LAYETTE } from 'graphql/queries';
import { LayetteResponse } from 'types/layette';
import { getEnvVariable } from 'helpers/getEnvVariable';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactInfo } from 'types/contactData';

type Props = {
  layette: LayetteResponse;
  contactInfo: ContactInfo;
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

  const layetteRes = await client.query({
    query: GET_LAYETTE,
  });

  const layette = layetteRes.data.layette;

  const contactInfoRes = await client.query({
    query: GET_CONTACT_INFO,
  });

  const contactInfo = contactInfoRes.data.contactInfo.data.attributes;

  return {
    props: {
      layette,
      contactInfo,
    },
  };
};
