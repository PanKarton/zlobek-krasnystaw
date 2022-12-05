import '@testing-library/jest-dom';
import Layette, { getStaticProps } from '../../pages/wyprawka/index';
import { client } from '../../graphql/apolloClient';
import { render, screen } from 'testHelpers/test-utils';
import { testContactInfo, testLayette } from '../../testHelpers/screen-test-functions';
import { apolloContactInfoMockResponse, apolloLeyetteMockResponse } from '../../testHelpers/mocked-responses';

describe('Layette page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Properly displays layette page with contact info and layette list', async () => {
    const spyFunc = jest.spyOn(client, 'query').mockImplementation(async () => apolloContactInfoMockResponse);
    spyFunc.mockResolvedValueOnce(apolloLeyetteMockResponse);
    spyFunc.mockResolvedValueOnce(apolloContactInfoMockResponse);

    const {
      props: { contactInfo, layette },
    } = await getStaticProps();

    render(<Layette contactInfo={contactInfo} layette={layette} />);

    testContactInfo();
    testLayette();
    screen.getByText(/Wyprawka malucha/);
  });
});
