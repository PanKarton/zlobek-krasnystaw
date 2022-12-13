import '@testing-library/jest-dom';
import { render } from 'testHelpers/test-utils';
import Home, { getStaticProps } from 'pages';
import { client } from 'graphql/apolloClient';
import { apolloContactInfoMockResponse } from '../../testHelpers/mocked-responses';
import { testContactInfo } from '../../testHelpers/screen-elements-test-functions';

describe('Home page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Properly displays home page with contact info', async () => {
    jest.spyOn(client, 'query').mockImplementation(async () => apolloContactInfoMockResponse);
    const {
      props: { contactInfo },
    } = await getStaticProps();

    render(<Home contactInfo={contactInfo} />);

    testContactInfo();
  });
});
