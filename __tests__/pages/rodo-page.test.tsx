import '@testing-library/jest-dom';
import Rodo, { getStaticProps } from '../../pages/rodo/index';
import { client } from '../../graphql/apolloClient';
import { render, screen } from 'testHelpers/test-utils';
import { testContactInfo } from '../../testHelpers/screen-test-functions';
import { apolloContactInfoMockResponse } from '../../testHelpers/mocked-responses';

describe('RODO page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Properly displays RODO page with contact info and layette list', async () => {
    jest.spyOn(client, 'query').mockImplementation(async () => apolloContactInfoMockResponse);

    const {
      props: { contactInfo },
    } = await getStaticProps();

    render(<Rodo contactInfo={contactInfo} />);

    testContactInfo();
    screen.getByText(/Ochrona danych osobowych/);
  });
});
