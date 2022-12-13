import '@testing-library/jest-dom';
import Contact, { getStaticProps } from '../../pages/kontakt/index';
import { client } from '../../graphql/apolloClient';
import { render, screen } from 'testHelpers/test-utils';
import { testContactPage } from '../../testHelpers/screen-elements-test-functions';
import { apolloContactInfoMockResponse } from '../../testHelpers/mocked-responses';

describe('Contact page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Properly displays contact page with contact info and layette list', async () => {
    jest.spyOn(client, 'query').mockImplementation(async () => apolloContactInfoMockResponse);

    const {
      props: { contactInfo },
    } = await getStaticProps();

    render(<Contact contactInfo={contactInfo} />);

    testContactPage();
    screen.getByText(/Skontaktuj się z nami/);
  });
});
