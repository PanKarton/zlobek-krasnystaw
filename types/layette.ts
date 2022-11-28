export interface LayetteResponse {
  typename: string;
  data: Data;
}

export interface Data {
  typename: string;
  attributes: Attributes;
}

export interface Attributes {
  typename: string;
  layette: Layette[];
}

export interface Layette {
  typename: string;
  id: string;
  name: string;
}
