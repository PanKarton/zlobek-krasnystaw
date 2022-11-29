import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { NewsPosts, ApolloNewsPostsResponse } from 'types/newsPostsArray';
import { useQuery } from '@apollo/client';
import { GET_NEWS_POSTS } from 'graphql/queries';
import { client } from '../graphql/apolloClient';

type Props = {
  children: ReactNode;
};

type Context = {
  newsPostsState: NewsPosts;
  handleLoadMoreNews: () => void;
  isLoading: boolean;
  isLoadMoreButtonVisible: boolean;
  errorMessage: ErrorMessage;
};

type ErrorMessage = '' | 'Ups, coś poszło nie tak. Spróbuj ponownie! :)';

const NewsPostsContext = createContext<Context | null>(null);

const PAGE_SIZE = 3;

export const NewsPostsProvider = ({ children }: Props) => {
  const [isLoadMoreButtonVisible, setIsLoadMoreButtonVisible] = useState(true);
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>('');
  const { data, loading, fetchMore } = useQuery<ApolloNewsPostsResponse>(GET_NEWS_POSTS, {
    client,
    variables: {
      page: 1,
      pageSize: PAGE_SIZE,
    },
  });

  useEffect(() => {
    if (!data) return;
    const postsNumber = data.newsPosts.data.length;

    // If number of displayed posts is not multiple of PAGE_SIZE, then all posts avaliable are displayed
    if (postsNumber % PAGE_SIZE != 0) setIsLoadMoreButtonVisible(false);
  }, [data]);

  const handleLoadMoreNews = useCallback(async () => {
    try {
      if (!data) return;
      setErrorMessage('');

      const postsNumber = data.newsPosts.data.length;

      const nextPagePointer = postsNumber / PAGE_SIZE + 1;

      await fetchMore({
        // Update page variable based on current data length
        variables: {
          page: nextPagePointer,
          pageSize: PAGE_SIZE,
        },
        // Merge old data with new data and return(update) current data
        updateQuery: (prevResult, { fetchMoreResult }) => {
          const prevData = prevResult.newsPosts.data;
          const newData = fetchMoreResult.newsPosts.data;

          if (newData.length === 0) {
            setIsLoadMoreButtonVisible(false);
            return prevResult;
          }

          const mergedData = [...prevData, ...newData];

          return {
            newsPosts: {
              __typename: 'NewsPostEntityResponseCollection',
              data: mergedData,
            },
          };
        },
      });
    } catch (err) {
      setErrorMessage('Ups, coś poszło nie tak. Spróbuj ponownie! :)');
    }
  }, [data, fetchMore]);

  const context = {
    newsPostsState: data ? data.newsPosts.data : [],
    handleLoadMoreNews,
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
