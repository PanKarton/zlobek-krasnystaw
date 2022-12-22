export interface GalleryGroupsResponse {
  grupies: Groups;
}

export interface Groups {
  data: GroupsData[];
}

export interface GroupsData {
  attributes: GroupsDataAttributes;
}

export interface GroupsDataAttributes {
  nazwa: string;
  numerGrupy: number;
  foldery_zdjecs: ImageFolders;
}

export interface ImageFolders {
  data: ImageFoldersData[];
}

export interface ImageFoldersData {
  id: string;
  attributes: ImageFoldersDataAttributes;
}

export interface ImageFoldersDataAttributes {
  nazwa: string;
  slug: string;
  publishedAt: Date;
  miniatura: Miniature;
  zdjecia: GalleryImages;
}

export interface GalleryImages {
  data: GalleryImage[];
}

export interface GalleryImage {
  id: string;
  attributes: ImageAttributes;
}

export interface ImageAttributes {
  url: string;
  alternativeText: string;
}

export interface Miniature {
  data: MiniatureData;
}

export interface MiniatureData {
  attributes: MiniatureDataAttributes;
}

export interface MiniatureDataAttributes {
  alternativeText: string;
  url: string;
}
