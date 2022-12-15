export interface Pokedex {
  data: PokedexData;
}

export interface PokedexData {
  grupies: Grupies;
}

export interface Grupies {
  __typename: string;
  data: GrupiesDatum[];
}

export interface GrupiesDatum {
  __typename: string;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  __typename: string;
  nazwa: string;
  numerGrupy: number;
  foldery_zdjecs: FolderyZdjecs;
}

export interface FolderyZdjecs {
  __typename: string;
  data: FolderyZdjecsDatum[];
}

export interface FolderyZdjecsDatum {
  __typename: string;
  id: string;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  __typename: string;
  nazwa: string;
  slug: string;
  miniatura: Miniatura;
}

export interface Miniatura {
  data: MiniaturaData;
}

export interface MiniaturaData {
  attributes: DataAttributes;
}

export interface DataAttributes {
  alternativeText: string;
  name: string;
}
