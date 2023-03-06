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
  numerTelefonu: string;
  email: string;
  dniOtwarte: string;
  adres: Adres;
  godzinyPracy: GodzinyPracy;
}

export interface Adres {
  miasto: string;
  nazwa: string;
  ulica: string;
}

export interface GodzinyPracy {
  godzinaOtwarcia: string;
  godzinaZamkniecia: string;
}
