export interface ApolloNewsPostsResponse {
  newsPosts: NewsPosts;
}

export interface NewsPosts {
  data: NewsPost[];
}

export interface NewsPost {
  id: string;
  attributes: Attributes;
}

export interface Attributes {
  title: string;
  content: string;
  image: NewsPosts;
  publishedAt: Date;
}
