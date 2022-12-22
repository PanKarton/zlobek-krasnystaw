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
  layette: LayetteElement[];
}

export interface LayetteElement {
  id: string;
  name: string;
}
