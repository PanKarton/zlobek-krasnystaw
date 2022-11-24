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

export const GET_STAFF_LISTS = gql`
  query {
    staff {
      data {
        attributes {
          directors {
            id
            name
          }
          serviceWorkers {
            id
            job
            name
          }
          babysitters {
            id
            name
          }
        }
      }
    }
  }
`;

export const GET_LAYETTE = gql`
  query {
    layette {
      data {
        attributes {
          layette {
            id
            name
          }
        }
      }
    }
  }
`;
