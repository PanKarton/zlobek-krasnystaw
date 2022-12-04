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

export const GET_NEWS_POSTS = gql`
  query NewsPosts($page: Int, $pageSize: Int, $startDate: DateTime, $endDate: DateTime) {
    newsPosts(
      pagination: { page: $page, pageSize: $pageSize }
      filters: { publishedAt: { gte: $startDate, lt: $endDate } }
      sort: "publishedAt:DESC"
    ) {
      data {
        id
        attributes {
          title
          content
          image {
            data {
              attributes {
                name
                alternativeText
                caption
                width
                height
                formats
                hash
                ext
                mime
                size
                url
                previewUrl
                provider
                provider_metadata
              }
            }
          }
          publishedAt
        }
      }
    }
  }
`;

export const GET_SINGLE_POST_BY_ID = gql`
  query ($id: ID!) {
    newsPost(id: $id) {
      data {
        id
        attributes {
          title
          content
          image {
            data {
              attributes {
                name
                alternativeText
                caption
                width
                height
                formats
                hash
                ext
                mime
                size
                url
                previewUrl
                provider
                provider_metadata
              }
            }
          }
          publishedAt
        }
      }
    }
  }
`;
