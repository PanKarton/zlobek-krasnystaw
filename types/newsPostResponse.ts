export interface NewsPostResponse {
  newsPost: NewsPost;
}

export interface NewsPost {
  data: NewsPostData;
}

export interface NewsPostData {
  id: string;
  attributes: NewsPostDataAttributes;
}

export interface NewsPostDataAttributes {
  title: string;
  content: string;
  image: PostImage;
  publishedAt: Date;
}

export interface PostImage {
  data: PostImageData[];
}

export interface PostImageData {
  attributes: PostImageDataAttributes;
}

export interface PostImageDataAttributes {
  alternativeText: string;
  url: string;
}
