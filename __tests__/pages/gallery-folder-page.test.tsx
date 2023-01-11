import '@testing-library/jest-dom';
import { client } from '../../graphql/apolloClient';
import { render, screen } from 'testHelpers/test-utils';
import { apolloContactInfoMockResponse, apolloImagesFolderInfoMockSuccess } from 'testHelpers/mocked-responses';
import 'next-router-mock';
import GalleryFolder, { getStaticProps } from 'pages/galeria/grupa/[groupId]/folder/[slug]';

jest.mock('next/router', () => require('next-router-mock'));

const mockContext = {
  params: {
    groupId: '1',
    slug: 'test-slug',
  },
};

describe('Gallery images folder page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Properly displays gallery images folder page with contact info, group name and images ', async () => {
    const spyFunc = jest.spyOn(client, 'query').mockImplementation(async () => apolloContactInfoMockResponse);
    spyFunc.mockResolvedValueOnce(apolloContactInfoMockResponse);
    spyFunc.mockResolvedValueOnce(apolloImagesFolderInfoMockSuccess);

    const {
      props: { contactInfo, imagesFolderAttributes, groupName, groupNumber },
    } = await getStaticProps(mockContext);

    render(
      <GalleryFolder contactInfo={contactInfo} imagesFolderAttributes={imagesFolderAttributes} groupName={groupName} groupNumber={groupNumber} />,
    );

    screen.getByText(/Test group name - Test folder name/);
    screen.getByText(/wtorek, 10.01.2023/);
    screen.getByAltText(/test alt 1/);
    screen.getByAltText(/test alt 2/);
  });
});
