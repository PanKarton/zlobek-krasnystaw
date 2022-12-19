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
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
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
  attributes: TentacledAttributes;
}

export interface TentacledAttributes {
  name: string;
  alternativeText: string;
}
