import { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { NewsPosts, ApolloNewsPostsResponse } from 'types/newsPostsArray';
import { ApolloClient, InMemoryCache, useQuery } from '@apollo/client';
import { GET_NEWS_POSTS_WITH_PAGINATION } from 'graphql/queries';
import { getEnvVariable } from 'helpers/getEnvVariable';

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

const PAGE_SIZE = 4;

const client = new ApolloClient({
  uri: getEnvVariable(process.env.NEXT_PUBLIC_STRAPI_URL),
  cache: new InMemoryCache({
    typePolicies: {
      NewsPostEntityResponseCollection: {
        keyFields: [],
        fields: {
          data: {
            merge: (existing = [], incoming = []) => [...existing, ...incoming],
          },
        },
      },
    },
  }),
});

export const NewsPostsProvider = ({ children }: Props) => {
  const [isLoadMoreButtonVisible, setIsLoadMoreButtonVisible] = useState(true);
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>('');
  const { data, loading, error, fetchMore } = useQuery<ApolloNewsPostsResponse>(GET_NEWS_POSTS_WITH_PAGINATION, {
    client,
    variables: {
      page: 1,
      pageSize: PAGE_SIZE,
    },
  });

  const handleLoadMoreNews = useCallback(async () => {
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
      });
      // Hide button when received less items than PAGE_SIZE
      if (response.data.newsPosts.data.length < PAGE_SIZE) setIsLoadMoreButtonVisible(false);
    } catch {
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
