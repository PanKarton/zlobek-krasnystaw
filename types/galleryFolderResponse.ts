export interface GalleryFolderResponse {
  grupies: GalleryGroups;
}

export interface GalleryGroups {
  data: GalleryGroup[];
}

export interface GalleryGroup {
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  nazwa: string;
  numerGrupy: number;
  foldery_zdjecs: ImagesFolders;
}

export interface ImagesFolders {
  data: ImagesFolder[];
}

export interface ImagesFolder {
  id: string;
  attributes: ImagesFolderAttributes;
}

export interface ImagesFolderAttributes {
  nazwa: string;
  slug: string;
  publishedAt: Date;
  zdjecia: Images;
}

export interface Images {
  data: Image[];
}

export interface Image {
  id: string;
  attributes: ImageAttributes;
}

export interface ImageAttributes {
  url: string;
  alternativeText: string;
}
