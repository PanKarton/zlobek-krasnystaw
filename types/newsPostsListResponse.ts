export interface NewsPostsListResponse {
  newsPosts: NewsPosts;
}

export interface NewsPosts {
  data: NewsPost[];
}

export interface NewsPost {
  id: string;
  attributes: NewsPostAttributes;
}

export interface NewsPostAttributes {
  title: string;
  content: string;
  image: NewsPosts;
  publishedAt: Date;
}
