export interface Props {
  fees: FeesResponse;
}

export interface FeesResponse {
  typename: string;
  attributes: Attributes;
}

export interface Attributes {
  typename: string;
  monthlyFee: string;
  dailyFoodFee: string;
  bankName: string;
  accountNumber: string;
}
