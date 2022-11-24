export interface Props {
  staff: StaffResponse;
}

export interface StaffResponse {
  typename: string;
  data: Data;
}

export interface Data {
  typename: string;
  attributes: Attributes;
}

export interface Attributes {
  typename: string;
  directors: Babysitter[];
  serviceWorkers: Babysitter[];
  babysitters: Babysitter[];
}

export interface Babysitter {
  typename: Typename;
  id: string;
  name: string;
  job?: string;
}

export enum Typename {
  ComponentBabysittersBabysitters = 'ComponentBabysittersBabysitters',
  ComponentDirectorsDirectors = 'ComponentDirectorsDirectors',
  ComponentServiceWorkersServiceWorkers = 'ComponentServiceWorkersServiceWorkers',
}
