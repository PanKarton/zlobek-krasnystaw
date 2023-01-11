import '@testing-library/jest-dom';
import { client } from '../../graphql/apolloClient';
import { render, screen } from 'testHelpers/test-utils';
import GroupGallery, { getStaticProps } from './../../pages/galeria/grupa/[groupId]/index';
import {
  apolloContactInfoMockResponse,
  apolloGalleryGroupInfoMockSuccess,
  apolloGalleryGroupInfoZeroFoldersMockSuccess,
} from 'testHelpers/mocked-responses';
import 'next-router-mock';
import { testGalleryGroupPage } from 'testHelpers/screen-elements-test-functions';

jest.mock('next/router', () => require('next-router-mock'));

const mockContext = {
  params: {
    groupId: '1',
  },
};

describe('Gallery group page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Properly displays gallery group page with contact info, group name and images folders', async () => {
    const spyFunc = jest.spyOn(client, 'query').mockImplementation(async () => apolloContactInfoMockResponse);
    spyFunc.mockResolvedValueOnce(apolloContactInfoMockResponse);
    spyFunc.mockResolvedValueOnce(apolloGalleryGroupInfoMockSuccess);

    const {
      props: { contactInfo, galleryGroupInfo, groupName },
    } = await getStaticProps(mockContext);

    render(<GroupGallery contactInfo={contactInfo} galleryGroupInfo={galleryGroupInfo} groupName={groupName} />);

    testGalleryGroupPage();
  });

  it('Properly message when there are no images folders yet', async () => {
    const spyFunc = jest.spyOn(client, 'query').mockImplementation(async () => apolloContactInfoMockResponse);
    spyFunc.mockResolvedValueOnce(apolloContactInfoMockResponse);
    spyFunc.mockResolvedValueOnce(apolloGalleryGroupInfoZeroFoldersMockSuccess);

    const {
      props: { contactInfo, galleryGroupInfo, groupName },
    } = await getStaticProps(mockContext);

    render(<GroupGallery contactInfo={contactInfo} galleryGroupInfo={galleryGroupInfo} groupName={groupName} />);

    screen.getByText(/Brak folderów zdjęć. Zapraszamy za jakiś czas!/);
  });
});
