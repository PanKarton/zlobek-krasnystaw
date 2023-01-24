import { StaffListPageSection } from 'modules/kadra/StaffListPageSection/StaffListPageSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO, GET_STAFF_LISTS } from 'graphql/queries';
import { StaffDataAttributes, StaffResponse } from 'types/staffResponse';
import { ContactInfoDataAttributes, ContactInfoResponse } from 'types/contactDataResponse';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { client } from '../../graphql/apolloClient';
import { NextPage } from 'next';
import Head from 'next/head';

type PageProps = {
  staff: StaffDataAttributes;
  contactInfo: ContactInfoDataAttributes;
};

const Staff: NextPage<PageProps> = ({ staff, contactInfo }) => {
  return (
    <>
      <Head>
        <title>Żłobek Miejski w Krasnystawie - kadra</title>
      </Head>
      <ContactDataProvider contactData={contactInfo}>
        <SecondaryTemplate heading="Nasza załoga">
          <StaffListPageSection staffData={staff} />
        </SecondaryTemplate>
      </ContactDataProvider>
    </>
  );
};

export default Staff;

export const getStaticProps = async () => {
  const staffRes = await client.query<StaffResponse>({
    query: GET_STAFF_LISTS,
  });

  const staff = staffRes.data.staff.data.attributes;

  const contactInfoRes = await client.query<ContactInfoResponse>({
    query: GET_CONTACT_INFO,
  });

  const contactInfo = contactInfoRes.data.contactInfo.data.attributes;

  return {
    props: {
      staff,
      contactInfo,
    },
  };
};
