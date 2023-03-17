import { gql } from '@apollo/client';

export const GET_FEES = gql`
  query {
    fee {
      data {
        attributes {
          kwotaMiesieczna
          wyzywienie
          numerKonta
          nazwaBanku
        }
      }
    }
  }
`;

export const GET_HEADMASTER_NAME = gql`
  query {
    headmaster {
      data {
        attributes {
          imieNazwisko
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
          elementyWyprawki {
            nazwa
            id
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
          planDnia {
            id
            godziny
            nazwa
          }
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
          opiekunki {
            imieNazwisko
            id
          }
          pracownicyAdministracjiOrazObslugi {
            id
            imieNazwisko
            stanowisko
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
          numerTelefonu
          email
          dniOtwarte
          adres {
            miasto
            nazwa
            ulica
          }
          godzinyPracy {
            godzinaOtwarcia
            godzinaZamkniecia
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
          tytul
          tresc
          opcjonalneZdjecie {
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
          tytul
          tresc
          opcjonalneZdjecie {
            data {
              attributes {
                alternativeText
                url
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
    groups {
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
    groups {
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
  query ($groupNumber: String) {
    groups(filters: { numerGrupy: { eq: $groupNumber } }) {
      data {
        attributes {
          nazwaGrupy
          numerGrupy
          foldery_zdjecs {
            data {
              id
              attributes {
                nazwaFolderu
                slug
                publishedAt
                miniaturaFolderu {
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
  query ($groupNumber: String, $slug: String) {
    groups(filters: { numerGrupy: { eq: $groupNumber } }) {
      data {
        attributes {
          nazwaGrupy
          numerGrupy
          foldery_zdjecs(filters: { slug: { eq: $slug } }) {
            data {
              id
              attributes {
                nazwaFolderu
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
