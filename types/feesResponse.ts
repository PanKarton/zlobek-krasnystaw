export interface FeesResponse {
  fee: Fees;
}

export interface Fees {
  data: FeesData;
}

export interface FeesData {
  attributes: FeesDataAttributes;
}

export interface FeesDataAttributes {
  monthlyFee: string;
  dailyFoodFee: string;
  bankName: string;
  accountNumber: string;
}
