export interface GroupsIdsAndFoldersSlugsResponse {
  grupies: Grupies;
}

export interface Grupies {
  data: Group[];
}

export interface Group {
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  numerGrupy: number;
  foldery_zdjecs: ImageFoldes;
}

export interface ImageFoldes {
  data: ImageFolder[];
}

export interface ImageFolder {
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  slug: string;
}
