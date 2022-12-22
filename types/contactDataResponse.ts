export interface ContactInfoResponse {
  contactInfo: ContactInfo;
}

export interface ContactInfo {
  data: ContactInfoData;
}

export interface ContactInfoData {
  attributes: ContactInfoDataAttributes;
}

export interface ContactInfoDataAttributes {
  phoneNumber: string;
  email: string;
  openDays: string;
  adress: Adress;
  openHours: OpenHours;
}

export interface Adress {
  city: string;
  name: string;
  street: string;
}

export interface OpenHours {
  openTime: string;
  closeTime: string;
}
