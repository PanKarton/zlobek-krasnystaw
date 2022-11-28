export type NewsPosts = NewsPostsDatum[];

export interface NewsPostsDatum {
  __typename: string;
  id: string;
  attributes: PostAttributes;
}

export interface PostAttributes {
  __typename: string;
  title: string;
  content: string;
  image: Image;
  publishedAt: Date;
}

export interface Image {
  __typename: string;
  data: ImageDatum[];
}

export interface ImageDatum {
  __typename: string;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  __typename: string;
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
}

export interface Formats {
  thumbnail: Small;
  small: Small;
}

export interface Small {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null;
  width: number;
  height: number;
  size: number;
  url: string;
}
