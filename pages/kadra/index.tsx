import { StaffListPageSection } from 'modules/kadra/StaffListPageSection/StaffListPageSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_STAFF_LISTS } from 'graphql/queries';
import { StaffResponse } from 'types/staff';

type Props = {
  staff: StaffResponse;
};

const Staff = ({ staff }: Props) => {
  return (
    <SecondaryTemplate heading="Nasza załoga">
      <StaffListPageSection staffData={staff} />
    </SecondaryTemplate>
  );
};

export default Staff;

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_STAFF_LISTS,
  });

  return {
    props: {
      staff: data.staff,
    },
  };
};
