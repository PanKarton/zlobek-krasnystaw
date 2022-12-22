import { LayetteSection } from 'modules/wyprawka/LayetteSection/LayetteSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO, GET_LAYETTE } from 'graphql/queries';
import { LayetteResponse } from 'types/layette';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactInfoDataAttributes, ContactInfoResponse } from 'types/contactData';
import { client } from '../../graphql/apolloClient';
import { GetStaticProps } from 'next';

type Props = {
  layette: LayetteResponse;
  contactInfo: ContactInfoDataAttributes;
};

const Layette = ({ layette, contactInfo }: Props) => {
  return (
    <ContactDataProvider contactData={contactInfo}>
      <SecondaryTemplate heading="Wyprawka malucha">
        <LayetteSection layette={layette} />
      </SecondaryTemplate>
    </ContactDataProvider>
  );
};

export default Layette;

export const getStaticProps: GetStaticProps = async () => {
  const layetteRes = await client.query({
    query: GET_LAYETTE,
  });

  const layette = layetteRes.data.layette;

  const contactInfoRes = await client.query<ContactInfoResponse>({
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
