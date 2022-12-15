import '@testing-library/jest-dom';
import Schedule, { getStaticProps } from '../../pages/plan-dnia/index';
import { client } from '../../graphql/apolloClient';
import { render, screen } from 'testHelpers/test-utils';
import { testContactInfo, testSchedule } from '../../testHelpers/screen-elements-test-functions';
import { apolloContactInfoMockResponse, apolloScheduleMockResponse } from '../../testHelpers/mocked-responses';

describe('Schedule page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Properly displays Schedule page with contact info and Schedule list', async () => {
    const spyFunc = jest.spyOn(client, 'query').mockImplementation(async () => apolloContactInfoMockResponse);
    spyFunc.mockResolvedValueOnce(apolloScheduleMockResponse);
    spyFunc.mockResolvedValueOnce(apolloContactInfoMockResponse);

    const {
      props: { contactInfo, daySchedule },
    } = await getStaticProps();

    render(<Schedule contactInfo={contactInfo} daySchedule={daySchedule} />);

    testContactInfo();
    testSchedule();
    screen.getByText(/Nasz plan dnia/);
  });
});
