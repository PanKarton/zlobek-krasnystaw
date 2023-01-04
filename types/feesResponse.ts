export interface FeesResponse {
  fee: Fee;
}

export interface Fee {
  data: FeesData;
}

export interface FeesData {
  attributes: FeesDataAttributes;
}

export interface FeesDataAttributes {
  kwotaMiesieczna: string;
  wyzywienie: string;
  numerKonta: string;
  nazwaBanku: string;
}
