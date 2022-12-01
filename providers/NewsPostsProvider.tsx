import { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { NewsPosts, ApolloNewsPostsResponse } from 'types/newsPostsArray';
import { useQuery } from '@apollo/client';
import { client } from '../graphql/apolloClient';
import { GET_NEWS_POSTS } from 'graphql/queries';
import { MonthData } from 'helpers/getMonthsSinceDate';

type Props = {
  children: ReactNode;
};

type Context = {
  newsPostsState: NewsPosts;
  handleLoadMoreNewsPosts: () => void;
  getPostsByMonth: (queryData: MonthData) => Promise<void>;
  isLoading: boolean;
  isLoadMoreButtonVisible: boolean;
  errorMessage: ErrorMessage;
};

type ErrorMessage = '' | 'Ups, coś poszło nie tak. Spróbuj ponownie! :)';

const NewsPostsContext = createContext<Context | null>(null);

const PAGE_SIZE = 1;
export const NewsPostsProvider = ({ children }: Props) => {
  const [isLoadMoreButtonVisible, setIsLoadMoreButtonVisible] = useState(true);
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>('');
  const { data, loading, error, fetchMore } = useQuery<ApolloNewsPostsResponse>(GET_NEWS_POSTS, {
    client,
    variables: {
      page: 1,
      pageSize: PAGE_SIZE,
    },
  });

  const handleLoadMoreNewsPosts = useCallback(async () => {
    try {
      if (!data) return;
      setErrorMessage('');

      const postsNumber = data.newsPosts.data.length;

      const nextPagePointer = postsNumber / PAGE_SIZE + 1;

      const response = await fetchMore({
        // Update page variable based on current data length
        variables: {
          page: nextPagePointer,
          pageSize: PAGE_SIZE,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const previousData = previousResult.newsPosts.data;
          const newData = fetchMoreResult.newsPosts.data;

          return {
            newsPosts: {
              __typename: 'NewsPostEntityResponseCollection',
              data: [...previousData, ...newData],
            },
          };
        },
      });
      // Hide button when received less items than PAGE_SIZE
      if (response.data.newsPosts.data.length < PAGE_SIZE) setIsLoadMoreButtonVisible(false);
    } catch {
      setErrorMessage('Ups, coś poszło nie tak. Spróbuj ponownie! :)');
    }
  }, [data, fetchMore]);

  const getPostsByMonth = useCallback(
    async ({ year, month, nextMonth, nextYear }: MonthData) => {
      try {
        if (!data) return;
        const startDate = `${year}-${month}-01T00:00:00.265Z`;
        const endDate = `${nextYear}-${nextMonth}-01T00:00:00.265Z`;

        const response = await fetchMore({
          // Update page variable based on current data length
          variables: {
            startDate,
            endDate,
          },
          updateQuery: (_, { fetchMoreResult }) => {
            const newData = fetchMoreResult.newsPosts.data;

            return {
              newsPosts: {
                __typename: 'NewsPostEntityResponseCollection',
                data: newData,
              },
            };
          },
        });
        setIsLoadMoreButtonVisible(false);
      } catch (err) {
        console.log('zesralem sb', { err });
      }
    },
    [data, fetchMore],
  );

  const context = {
    newsPostsState: data ? data.newsPosts.data : [],
    handleLoadMoreNewsPosts,
    getPostsByMonth,
    isLoading: loading,
    isLoadMoreButtonVisible,
    errorMessage,
  };

  return <NewsPostsContext.Provider value={context}>{children}</NewsPostsContext.Provider>;
};

export const useNewPosts = () => {
  const newsPosts = useContext(NewsPostsContext);

  if (newsPosts === null) throw Error('useNewPosts is supposed to be used inside NewsPostsProvider');

  return newsPosts;
};
