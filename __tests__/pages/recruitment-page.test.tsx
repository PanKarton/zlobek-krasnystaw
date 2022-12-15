import '@testing-library/jest-dom';
import Recruitment, { getStaticProps } from '../../pages/rekrutacja/index';
import { client } from '../../graphql/apolloClient';
import { render, screen } from 'testHelpers/test-utils';
import { testContactInfo } from '../../testHelpers/screen-elements-test-functions';
import { apolloContactInfoMockResponse } from '../../testHelpers/mocked-responses';

describe('Recruitment page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Properly displays recruitment page with contact info and layette list', async () => {
    jest.spyOn(client, 'query').mockImplementation(async () => apolloContactInfoMockResponse);

    const {
      props: { contactInfo },
    } = await getStaticProps();

    render(<Recruitment contactInfo={contactInfo} />);

    testContactInfo();
    screen.getByText(/Informacje o rekrutacji/);
  });
});
