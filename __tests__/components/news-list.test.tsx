import '@testing-library/jest-dom';
import { render, screen } from 'testHelpers/test-utils';
import {
  newsPostsMockSuccess,
  newsPostsMockFail,
  fetchMoreMockSuccess,
  fetchMoreMockFail,
  newsPostsMockZeroResults,
} from 'testHelpers/mocked-responses';
import { MockedProvider } from '@apollo/client/testing';
import { NewsPostsProvider } from 'providers/NewsPostsProvider';
import userEvent from '@testing-library/user-event';
import { testNewsPosts, testNewsPostsWithLoadedPosts } from 'testHelpers/screen-test-functions';
import { NewsListSection } from 'modules/aktualnosci/NewsListSection/NewsListSection';

describe('News list component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Properly displays news list', async () => {
    render(
      <MockedProvider mocks={[newsPostsMockSuccess]} addTypename={false}>
        <NewsPostsProvider>
          <NewsListSection />
        </NewsPostsProvider>
      </MockedProvider>,
    );

    await testNewsPosts();
  });

  it('Displays error message when loading posts fails', async () => {
    render(
      <MockedProvider mocks={[newsPostsMockFail]} addTypename={false}>
        <NewsPostsProvider>
          <NewsListSection />
        </NewsPostsProvider>
      </MockedProvider>,
    );

    await screen.findByText(/Ups, coś poszło nie tak. Odśwież stronę/i);
  });

  it('Displays message when there are 0 posts', async () => {
    render(
      <MockedProvider mocks={[newsPostsMockZeroResults]} addTypename={false}>
        <NewsPostsProvider>
          <NewsListSection />
        </NewsPostsProvider>
      </MockedProvider>,
    );

    await screen.findByText(/Nie udało się znaleźć postów/i);
  });

  it('Properly loads more posts', async () => {
    render(
      <MockedProvider mocks={[newsPostsMockSuccess, fetchMoreMockSuccess]} addTypename={false}>
        <NewsPostsProvider>
          <NewsListSection />
        </NewsPostsProvider>
      </MockedProvider>,
    );

    const user = userEvent.setup();

    await user.click(await getLoadMoreButton());

    await testNewsPostsWithLoadedPosts();
  });

  it('Displays error when load more posts fails', async () => {
    render(
      <MockedProvider mocks={[newsPostsMockSuccess, fetchMoreMockFail]} addTypename={false}>
        <NewsPostsProvider>
          <NewsListSection />
        </NewsPostsProvider>
      </MockedProvider>,
    );

    const user = userEvent.setup();

    await user.click(await getLoadMoreButton());

    await screen.findByText(/Ups, coś poszło nie tak. Spróbuj ponownie/i);
  });
});

const getLoadMoreButton = async () => await screen.findByRole('button', { name: /Załaduj więcej/i });
