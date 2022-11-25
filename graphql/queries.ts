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

export const GET_DAY_SCHEDULE = gql`
  query {
    daySchedule {
      data {
        attributes {
          daySchedule {
            id
            hours
            name
          }
        }
      }
    }
  }
`;

export const GET_CONTACT_INFO = gql`
  query {
    contactInfo {
      data {
        attributes {
          phoneNumber
          email
          openDays
          adress {
            city
            name
            street
          }
          openHours {
            openTime
            closeTime
          }
        }
      }
    }
  }
`;
