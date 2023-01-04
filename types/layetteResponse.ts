export interface LayetteResponse {
  layette: Layette;
}

export interface Layette {
  data: LayetteData;
}

export interface LayetteData {
  attributes: LayetteDataAttributes;
}

export interface LayetteDataAttributes {
  elementyWyprawki: LayetteElement[];
}

export interface LayetteElement {
  id: string;
  nazwa: string;
}
