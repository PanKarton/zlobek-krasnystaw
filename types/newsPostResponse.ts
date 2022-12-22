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
  image: Image;
  publishedAt: Date;
}

export interface Image {
  data: ImageData[];
}

export interface ImageData {
  attributes: ImageDataAttributes;
}

export interface ImageDataAttributes {
  alternativeText: string;
  url: string;
}
