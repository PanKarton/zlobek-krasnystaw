import '@testing-library/jest-dom';
import Staff, { getStaticProps } from '../../pages/kadra/index';
import { client } from '../../graphql/apolloClient';
import { render, screen } from 'testHelpers/test-utils';
import { testContactInfo, testStaff } from '../../testHelpers/screen-test-functions';
import { apolloContactInfoMockResponse, apolloStaffMockResponse } from '../../testHelpers/mocked-responses';

describe('Staff page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Properly displays layette page with contact info and layette list', async () => {
    const spyFunc = jest.spyOn(client, 'query').mockImplementation(async () => apolloContactInfoMockResponse);
    spyFunc.mockResolvedValueOnce(apolloStaffMockResponse);
    spyFunc.mockResolvedValueOnce(apolloContactInfoMockResponse);

    const {
      props: { contactInfo, staff },
    } = await getStaticProps();

    render(<Staff contactInfo={contactInfo} staff={staff} />);

    testContactInfo();
    testStaff();
    screen.getByText(/Pracownicy obsługi organizują jadłospis/);
  });
});
