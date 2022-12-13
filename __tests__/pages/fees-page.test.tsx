import '@testing-library/jest-dom';
import Fees, { getStaticProps } from '../../pages/oplaty/index';
import { client } from '../../graphql/apolloClient';
import { render, screen } from 'testHelpers/test-utils';
import { testContactInfo, testFees } from '../../testHelpers/screen-elements-test-functions';
import { apolloContactInfoMockResponse, apolloFeesMockResponse } from '../../testHelpers/mocked-responses';

describe('Fees page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Properly displays Fees page with contact info and Fees list', async () => {
    const spyFunc = jest.spyOn(client, 'query').mockImplementation(async () => apolloContactInfoMockResponse);
    spyFunc.mockResolvedValueOnce(apolloFeesMockResponse);
    spyFunc.mockResolvedValueOnce(apolloContactInfoMockResponse);

    const {
      props: { contactInfo, fees },
    } = await getStaticProps();

    render(<Fees contactInfo={contactInfo} fees={fees} />);

    testContactInfo();
    testFees();
    screen.getByText(/Cennik/);
  });
});
