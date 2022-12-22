import { NewsPostData } from './newsPostResponse';

export interface NewsPostsListResponse {
  newsPosts: NewsPosts;
}

export interface NewsPosts {
  data: NewsPostData[];
}
