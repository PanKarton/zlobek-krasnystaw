import { LayetteSection } from 'modules/wyprawka/LayetteSection/LayetteSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO, GET_LAYETTE } from 'graphql/queries';
import { LayetteResponse } from 'types/layette';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactInfo } from 'types/contactData';
import { client } from '../../graphql/apolloClient';

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
