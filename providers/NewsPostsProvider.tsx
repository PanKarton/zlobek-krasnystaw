import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { ApolloError, useQuery } from '@apollo/client';
import { GET_NEWS_POSTS } from 'graphql/queries';
import { MonthData } from 'helpers/getMonthsSinceDate';
import { NewsPostsListResponse } from 'types/newsPostsListResponse';
import { NewsPostData } from 'types/newsPostResponse';

type Props = {
  children: ReactNode;
};

type ErrorMessage = '' | 'Ups, coś poszło nie tak. Spróbuj ponownie! :)';

type Context = {
  newsPostsState: NewsPostData[];
  handleLoadMoreNewsPosts: () => Promise<void>;
  getPostsByMonth: (_queryData: MonthData) => Promise<void>;
  getInitPosts: () => Promise<void>;
  isLoading: boolean;
  isAllDataDisplayed: boolean;
  isLoadMoreButtonVisible: boolean;
  errorMessage: ErrorMessage;
  archivesErrorMessage: ErrorMessage;
  error: ApolloError | undefined;
};

const NewsPostsContext = createContext<Context | null>(null);

const pageSize = 2;

export const NewsPostsProvider = ({ children }: Props) => {
  const [isAllDataDisplayed, setIsAllDataDisplayed] = useState(false);
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>('');
  const [archivesErrorMessage, setArchivesErrorMessage] = useState<ErrorMessage>('');
  const { data, loading, error, fetchMore } = useQuery<NewsPostsListResponse>(GET_NEWS_POSTS, {
    variables: {
      page: 1,
      pageSize,
    },
  });
  const isLoadMoreButtonVisible = !(isAllDataDisplayed || !!error || data?.newsPosts.data.length === 0 || loading);

  const checkIfIsMorePostsAvaliable = useCallback(async () => {
    try {
      if (!data) return;

      const postsNumber = data.newsPosts.data.length;

      const nextPagePointer = postsNumber / pageSize + 1;

      // Hide button when nextPagePointer is float
      if (!Number.isInteger(nextPagePointer)) return setIsAllDataDisplayed(true);

      const response = await fetchMore({
        variables: {
          page: nextPagePointer,
          pageSize,
        },
        updateQuery: (previousResult) => {
          const previousData = previousResult.newsPosts.data;

          return {
            newsPosts: {
              __typename: 'NewsPostEntityResponseCollection',
              data: [...previousData],
            },
          };
        },
      });

      response.data.newsPosts.data.length === 0 ? setIsAllDataDisplayed(true) : setIsAllDataDisplayed(false);
    } catch (error) {
      console.log('Additional news posts fetch error', { error });
    }
  }, [data, fetchMore]);

  useEffect(() => {
    // Additional fetch to check if there is more data waiting on server
    checkIfIsMorePostsAvaliable();
  }, [checkIfIsMorePostsAvaliable]);

  const getInitPosts = useCallback(async () => {
    try {
      await fetchMore({
        variables: {
          page: 1,
          pageSize,
        },
        updateQuery: (_, { fetchMoreResult }) => {
          const newData = fetchMoreResult.newsPosts.data;

          return {
            newsPosts: {
              __typename: 'NewsPostEntityResponseCollection',
              data: [...newData],
            },
          };
        },
      });
      checkIfIsMorePostsAvaliable();
    } catch {
      setErrorMessage('Ups, coś poszło nie tak. Spróbuj ponownie! :)');
    }
  }, [fetchMore, checkIfIsMorePostsAvaliable]);

  const handleLoadMoreNewsPosts = useCallback(async () => {
    try {
      if (!data) return;

      setErrorMessage('');

      const postsNumber = data.newsPosts.data.length;

      const nextPagePointer = postsNumber / pageSize + 1;

      const response = await fetchMore({
        // Update page graphql variable based on current data length
        variables: {
          page: nextPagePointer,
          pageSize,
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

      // Hide button when received less items than pageSize
      if (response.data.newsPosts.data.length < pageSize) setIsAllDataDisplayed(false);
    } catch (err) {
      setErrorMessage('Ups, coś poszło nie tak. Spróbuj ponownie! :)');
    }
  }, [data, fetchMore]);

  const getPostsByMonth = useCallback(
    async ({ year, month, nextMonth, nextYear }: MonthData) => {
      try {
        setArchivesErrorMessage('');
        if (!data) return;
        const startDate = `${year}-${month}-01T00:00:00.265Z`;
        const endDate = `${nextYear}-${nextMonth}-01T00:00:00.265Z`;

        await fetchMore({
          // Fetch with filter by publishDate variables and override pagination variables to display all posts of month
          variables: {
            startDate,
            endDate,
            page: 1,
            pageSize: 100,
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

        setIsAllDataDisplayed(true);
      } catch (err) {
        setArchivesErrorMessage('Ups, coś poszło nie tak. Spróbuj ponownie! :)');
      }
    },
    [data, fetchMore],
  );

  const context = {
    newsPostsState: data ? data.newsPosts.data : [],
    handleLoadMoreNewsPosts,
    getPostsByMonth,
    getInitPosts,
    isLoading: loading,
    isAllDataDisplayed,
    isLoadMoreButtonVisible,
    errorMessage,
    archivesErrorMessage,
    error,
  };

  return <NewsPostsContext.Provider value={context}>{children}</NewsPostsContext.Provider>;
};

export const useNewsPosts = () => {
  const newsPosts = useContext(NewsPostsContext);

  if (newsPosts === null) throw Error('useNewPosts is supposed to be used inside NewsPostsProvider');

  return newsPosts;
};
