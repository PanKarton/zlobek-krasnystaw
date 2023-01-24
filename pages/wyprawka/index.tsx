import { LayetteSection } from 'modules/wyprawka/LayetteSection/LayetteSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO, GET_LAYETTE } from 'graphql/queries';
import { LayetteElement, LayetteResponse } from 'types/layetteResponse';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { ContactInfoDataAttributes, ContactInfoResponse } from 'types/contactDataResponse';
import { client } from '../../graphql/apolloClient';
import { NextPage } from 'next';

type PageProps = {
  layette: LayetteElement[];
  contactInfo: ContactInfoDataAttributes;
};

const Layette: NextPage<PageProps> = ({ layette, contactInfo }) => {
  return (
    <ContactDataProvider contactData={contactInfo}>
      <SecondaryTemplate heading="Wyprawka malucha">
        <LayetteSection layette={layette} />
      </SecondaryTemplate>
    </ContactDataProvider>
  );
};

export default Layette;

export const getStaticProps = async () => {
  const layetteRes = await client.query<LayetteResponse>({
    query: GET_LAYETTE,
  });


  const layette = layetteRes.data.layette.data.attributes.elementyWyprawki;

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
