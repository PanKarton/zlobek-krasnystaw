import '@testing-library/jest-dom';
import { render, screen } from 'testHelpers/test-utils';
import { failedNewsPostsMockRequestAndResult, fetchMoreMockSuccess, newsPostsMockRequestAndResult } from 'testHelpers/mocked-responses';
import { MockedProvider } from '@apollo/client/testing';
import { NewsListSection } from 'modules/aktualnosci/NewsListSection/NewsListSection';
import { NewsPostsProvider } from 'providers/NewsPostsProvider';
import userEvent from '@testing-library/user-event';
import { testNewsPostsWithLoadedPosts } from 'testHelpers/screen-test-functions';

describe('News list component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  //   it('Properly displays news list', async () => {
  //     render(
  //       <MockedProvider mocks={newsPostsMockRequestAndResult} addTypename={false}>
  //         <NewsPostsProvider>
  //           <NewsListSection />
  //         </NewsPostsProvider>
  //       </MockedProvider>,
  //     );

  //     expect(await screen.findByText(/Test title 1/)).toBeInTheDocument();
  //     expect(await screen.findByText(/Test content 1/)).toBeInTheDocument();
  //     expect(await screen.findByText(/Test title 2/)).toBeInTheDocument();
  //     expect(await screen.findByText(/Test content 2/)).toBeInTheDocument();
  //   });

  //   it('Displays error when loading posts fails', async () => {
  //     render(
  //       <MockedProvider mocks={failedNewsPostsMockRequestAndResult} addTypename={false}>
  //         <NewsPostsProvider>
  //           <NewsListSection />
  //         </NewsPostsProvider>
  //       </MockedProvider>,
  //     );

  //     await screen.findByText(/Ups, coś poszło nie tak. Odśwież stronę/i);
  //   });

  //   it('Properly loads more posts', async () => {
  //     render(
  //       <MockedProvider mocks={fetchMoreMockSuccess} addTypename={false}>
  //         <NewsPostsProvider>
  //           <NewsListSection />
  //         </NewsPostsProvider>
  //       </MockedProvider>,
  //     );

  //     const user = userEvent.setup();

  //     await user.click(await getLoadMoreButton());
  //     await testNewsPostsWithLoadedPosts();
  //   });
});

const getLoadMoreButton = async () => await screen.findByRole('button', { name: /Załaduj więcej/i });
