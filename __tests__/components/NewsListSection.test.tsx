import '@testing-library/jest-dom';
import { render, screen } from 'testHelpers/test-utils';
import {
  newsPostsMockSuccess,
  newsPostsMockFail,
  fetchMoreMockSuccess,
  fetchMoreMockFail,
  newsPostsMockZeroResults,
  fetchMoreOfMonthMockSuccess,
  fetchMoreOfMonthMockFail,
  dummyFetchMock,
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
      <MockedProvider mocks={[newsPostsMockSuccess, fetchMoreMockSuccess, fetchMoreMockSuccess]} addTypename={false}>
        <NewsPostsProvider>
          <NewsListSection />
        </NewsPostsProvider>
      </MockedProvider>,
    );

    const user = userEvent.setup();

    await user.click(await findLoadMoreButton());

    await testNewsPostsWithLoadedPosts();
  });

  it('Displays error when load more posts fails', async () => {
    render(
      <MockedProvider mocks={[newsPostsMockSuccess, dummyFetchMock, fetchMoreMockFail]} addTypename={false}>
        <NewsPostsProvider>
          <NewsListSection />
        </NewsPostsProvider>
      </MockedProvider>,
    );

    const user = userEvent.setup();

    await user.click(await findLoadMoreButton());

    await screen.findByText(/Ups, coś poszło nie tak. Spróbuj ponownie/i);
  });

  it('Loads posts of particular month after archives button click', async () => {
    render(
      <MockedProvider mocks={[newsPostsMockSuccess, dummyFetchMock, fetchMoreOfMonthMockSuccess]} addTypename={false}>
        <NewsPostsProvider>
          <NewsListSection />
        </NewsPostsProvider>
      </MockedProvider>,
    );

    const user = userEvent.setup();

    await user.click(await findLoadPostsOfMonthButton());

    await screen.findByText(/Listopad title test 1/i);
    await screen.findByText(/Listopad title test 2/i);

    expect(queryLoadMoreButton()).not.toBeInTheDocument();
  });

  it('Displays error after archives button query fails', async () => {
    render(
      <MockedProvider mocks={[newsPostsMockSuccess, dummyFetchMock, fetchMoreOfMonthMockFail]} addTypename={false}>
        <NewsPostsProvider>
          <NewsListSection />
        </NewsPostsProvider>
      </MockedProvider>,
    );

    const user = userEvent.setup();

    await user.click(await findLoadPostsOfMonthButton());

    await screen.findByText(/Ups, coś poszło nie tak. Spróbuj ponownie/i);
  });
});

const findLoadMoreButton = async () => await screen.findByRole('button', { name: /Załaduj więcej/i });
const queryLoadMoreButton = () => screen.queryByRole('button', { name: /Załaduj więcej/i });
const findLoadPostsOfMonthButton = async () => await screen.findByRole('button', { name: /Listopad/i });
