import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { NewsPosts } from 'types/newsPostsArray';

type Props = {
  children: ReactNode;
  newsPosts: NewsPosts;
};

type Context = {
  newsPostsState: NewsPosts;
  setNewsPostsState: Dispatch<SetStateAction<NewsPosts>>;
};

const NewsPostsContext = createContext<Context | null>(null);

export const NewsPostsProvider = ({ children, newsPosts }: Props) => {
  const [newsPostsState, setNewsPostsState] = useState(newsPosts);

  return <NewsPostsContext.Provider value={{ newsPostsState, setNewsPostsState }}>{children}</NewsPostsContext.Provider>;
};

export const useNewPosts = () => {
  const newsPosts = useContext(NewsPostsContext);

  if (newsPosts === null) throw Error('useNewPosts is supposed to be used inside NewsPostsProvider');

  return newsPosts;
};
