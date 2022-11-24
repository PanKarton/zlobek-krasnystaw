import { gql } from '@apollo/client';

export const GET_FEES = gql`
  query {
    fee {
      data {
        attributes {
          monthlyFee
          dailyFoodFee
          bankName
          accountNumber
        }
      }
    }
  }
`;
