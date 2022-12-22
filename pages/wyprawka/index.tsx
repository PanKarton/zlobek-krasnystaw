import { LayetteSection } from 'modules/wyprawka/LayetteSection/LayetteSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO, GET_LAYETTE } from 'graphql/queries';
import { LayetteElement, LayetteResponse } from 'types/layetteResponse';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactInfoDataAttributes, ContactInfoResponse } from 'types/contactDataResponse';
import { client } from '../../graphql/apolloClient';
import { GetStaticProps } from 'next';

type Props = {
  layette: LayetteElement[];
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
  const layetteRes = await client.query<LayetteResponse>({
    query: GET_LAYETTE,
  });

  const layette = layetteRes.data.layette.data.attributes.layette;

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
