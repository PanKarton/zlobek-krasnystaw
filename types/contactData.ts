export interface ContactDataResponse {
  contactInfo: ContactInfo;
}

export interface ContactInfo {
  typename: string;
  data: Data;
}

export interface Data {
  typename: string;
  attributes: Attributes;
}

export interface Attributes {
  typename: string;
  phoneNumber: string;
  email: string;
  openDays: string;
  adress: Adress;
  openHours: OpenHours;
}

export interface Adress {
  typename: string;
  city: string;
  name: string;
  street: string;
}

export interface OpenHours {
  typename: string;
  openTime: string;
  closeTime: string;
}
