import '@testing-library/jest-dom';
import { client } from '../../graphql/apolloClient';
import { render, screen } from 'testHelpers/test-utils';
import { testContactInfo } from '../../testHelpers/screen-test-functions';
import { apolloContactInfoMockResponse } from '../../testHelpers/mocked-responses';
import News, { getStaticProps } from 'pages/aktualnosci';

describe('News list page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Properly displays news list page with contact info ', async () => {
    jest.spyOn(client, 'query').mockImplementation(async () => apolloContactInfoMockResponse);

    const {
      props: { contactInfo },
    } = await getStaticProps();

    render(<News contactInfo={contactInfo} />);

    testContactInfo();
    screen.getByText(/Nasze nowości/);
  });
});
