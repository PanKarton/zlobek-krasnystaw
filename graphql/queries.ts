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

// News posts

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

// Gallery

export const GET_GROUPS_IDS = gql`
  query GetGroupsIds {
    grupies {
      data {
        attributes {
          numerGrupy
        }
      }
    }
  }
`;

export const GET_GROUPS_SLUGS = gql`
  query GetFoldersSlugs {
    grupies {
      data {
        attributes {
          numerGrupy
          foldery_zdjecs {
            data {
              attributes {
                slug
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_GALLERY_FOLDERS_OF_GROUP = gql`
  query ($groupNumber: Int) {
    grupies(filters: { numerGrupy: { eq: $groupNumber } }) {
      data {
        attributes {
          nazwa
          numerGrupy
          foldery_zdjecs {
            data {
              id
              attributes {
                nazwa
                slug
                publishedAt
                miniatura {
                  data {
                    attributes {
                      alternativeText
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_IMAGES_FOLDER_OF_GROUP = gql`
  query ($groupNumber: Int, $slug: String) {
    grupies(filters: { numerGrupy: { eq: $groupNumber } }) {
      data {
        attributes {
          nazwa
          numerGrupy
          foldery_zdjecs(filters: { slug: { eq: $slug } }) {
            data {
              id
              attributes {
                nazwa
                slug
                publishedAt
                zdjecia {
                  data {
                    id
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
