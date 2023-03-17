import { StaffListPageSection } from 'modules/kadra/StaffListPageSection/StaffListPageSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO, GET_STAFF_LISTS, GET_HEADMASTER_NAME } from 'graphql/queries';
import { StaffDataAttributes, StaffResponse } from 'types/staffResponse';
import { ContactInfoDataAttributes, ContactInfoResponse } from 'types/contactDataResponse';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { client } from '../../graphql/apolloClient';
import { NextPage } from 'next';
import Head from 'next/head';
import { HeadmasterResponse } from 'types/headmasterResponse';

type PageProps = {
  staff: StaffDataAttributes;
  contactInfo: ContactInfoDataAttributes;
  headmasterName: string;
};

const Staff: NextPage<PageProps> = ({ staff, contactInfo, headmasterName }) => {
  return (
    <>
      <Head>
        <title>Żłobek Miejski w Krasnystawie - kadra</title>
      </Head>
      <ContactDataProvider contactData={contactInfo}>
        <SecondaryTemplate heading="Nasza załoga">
          <StaffListPageSection staffData={staff} headmasterName={headmasterName} />
        </SecondaryTemplate>
      </ContactDataProvider>
    </>
  );
};

export default Staff;

export const getStaticProps = async () => {
  const staffRes = await client.query<StaffResponse>({
    query: GET_STAFF_LISTS,
    fetchPolicy: 'network-only',
  });

  const staff = staffRes.data.staff.data.attributes;

  const contactInfoRes = await client.query<ContactInfoResponse>({
    query: GET_CONTACT_INFO,
    fetchPolicy: 'network-only',
  });

  const contactInfo = contactInfoRes.data.contactInfo.data.attributes;

  const headmasterRes = await client.query<HeadmasterResponse>({
    query: GET_HEADMASTER_NAME,
    fetchPolicy: 'network-only',
  });

  const headmasterName = headmasterRes.data.headmaster.data.attributes.imieNazwisko;

  return {
    props: {
      staff,
      contactInfo,
      headmasterName,
    },
    revalidate: 3600,
  };
};
