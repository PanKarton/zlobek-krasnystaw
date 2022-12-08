import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { NewsPosts, ApolloNewsPostsResponse } from 'types/newsPostsArray';
import { ApolloError, useQuery } from '@apollo/client';
import { GET_NEWS_POSTS } from 'graphql/queries';
import { MonthData } from 'helpers/getMonthsSinceDate';

type Props = {
  children: ReactNode;
};

type Context = {
  newsPostsState: NewsPosts;
  handleLoadMoreNewsPosts: () => Promise<void>;
  getPostsByMonth: (queryData: MonthData) => Promise<void>;
  isLoading: boolean;
  isAllDataDisplayed: boolean;
  errorMessage: ErrorMessage;
  archivesErrorMessage: ErrorMessage;
  error: ApolloError | undefined;
};

type ErrorMessage = '' | 'Ups, coś poszło nie tak. Spróbuj ponownie! :)';

const NewsPostsContext = createContext<Context | null>(null);

const PAGE_SIZE = 2;

export const NewsPostsProvider = ({ children }: Props) => {
  const [isAllDataDisplayed, setIsAllDataDisplayed] = useState(true);
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>('');
  const [archivesErrorMessage, setArchivesErrorMessage] = useState<ErrorMessage>('');
  const { data, loading, error, fetchMore } = useQuery<ApolloNewsPostsResponse>(GET_NEWS_POSTS, {
    variables: {
      page: 1,
      pageSize: PAGE_SIZE,
    },
  });

  useEffect(() => {
    // Additional fetch to check if there is more data waiting on server
    const fetchData = async () => {
      try {
        if (!data) return;

        const postsNumber = data.newsPosts.data.length;

        const nextPagePointer = postsNumber / PAGE_SIZE + 1;

        // Hide button when nextPagePointer is float
        if (!Number.isInteger(nextPagePointer)) return setIsAllDataDisplayed(false);

        const response = await fetchMore({
          variables: {
            page: nextPagePointer,
            pageSize: PAGE_SIZE,
          },
        });

        // Hide button when there are no posts to fetch
        if (!response.data.newsPosts.data.length) setIsAllDataDisplayed(false);
      } catch (error) {
        console.log('Additional news posts fetch error', { error });
      }
    };

    fetchData();
  }, [data, fetchMore]);

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
      if (response.data.newsPosts.data.length < PAGE_SIZE) setIsAllDataDisplayed(false);
    } catch {
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

        const res = await fetchMore({
          // Fetch with filter by publishDate variables and override pagination variables to display all posts of month
          variables: {
            startDate,
            endDate,
            page: 1,
            pageSize: 100,
          },
          updateQuery: (_, { fetchMoreResult }) => {
            const data = fetchMoreResult.newsPosts.data;

            return {
              newsPosts: {
                __typename: 'NewsPostEntityResponseCollection',
                data,
              },
            };
          },
        });

        setIsAllDataDisplayed(false);
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
    isLoading: loading,
    isAllDataDisplayed,
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
