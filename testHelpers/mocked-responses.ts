import { GET_NEWS_POSTS } from 'graphql/queries';

export const apolloContactInfoMockResponse = {
  data: {
    contactInfo: {
      data: {
        attributes: {
          typename: 'test',
          numerTelefonu: '123',
          email: 'test@test.pl',
          dniOtwarte: 'mon - fri',
          adres: { typename: 'test', miasto: 'Hajduszoboszlo', nazwa: 'testName', ulica: 'testStreet' },
          godzinyPracy: {
            typename: 'test',
            godzinaOtwarcia: 'testOpen',
            godzinaZamkniecia: 'testClose',
          },
        },
      },
    },
  },
  loading: false,
  networkStatus: 7,
};

export const apolloLeyetteMockResponse = {
  data: {
    layette: {
      data: {
        attributes: {
          elementyWyprawki: [
            {
              id: 1,
              nazwa: 'Test layette item one',
            },
            {
              id: 2,
              nazwa: 'Test layette item two',
            },
            {
              id: 3,
              nazwa: 'Test layette item three',
            },
          ],
        },
      },
    },
  },
  loading: false,
  networkStatus: 7,
};
export const apolloScheduleMockResponse = {
  data: {
    daySchedule: {
      data: {
        attributes: {
          planDnia: [
            {
              id: '13',
              godziny: '6:00 - 8:00',
              nazwa: 'przyjmowanie dzieci do żłobka',
            },
            {
              id: '14',
              godziny: '8:00 – 8:30',
              nazwa: 'śniadanie',
            },
            {
              id: '15',
              godziny: '8:30 – 9:00',
              nazwa: 'dowolne zabawy w grupie',
            },
          ],
        },
      },
    },
  },
  loading: false,
  networkStatus: 7,
};

export const apolloFeesMockResponse = {
  data: {
    fee: {
      data: {
        attributes: {
          kwotaMiesieczna: 'test100',
          wyzywienie: 'test7',
          nazwaBanku: 'test BS Krasnystaw',
          numerKonta: 'test 36 8200 0008 2001 0010 3567 0006',
        },
      },
    },
  },
  loading: false,
  networkStatus: 7,
};

// News

export const newsPostsMockSuccess = {
  request: {
    query: GET_NEWS_POSTS,
    variables: {
      page: 1,
      pageSize: 2,
    },
  },
  result: {
    data: {
      newsPosts: {
        data: [
          {
            id: '1',
            attributes: {
              tytul: 'Test title 1',
              tresc: 'Test content 1',
              opcjonalneZdjecie: {
                data: [],
              },
              publishedAt: '2022-12-10T20:03:26.379Z',
            },
          },
          {
            id: '2',
            attributes: {
              tytul: 'Test title 2',
              tresc: 'Test content 2',
              opcjonalneZdjecie: {
                data: [],
              },
              publishedAt: '2022-12-09T20:03:26.379Z',
            },
          },
        ],
      },
    },
  },
};

export const newsPostsMockZeroResults = {
  request: {
    query: GET_NEWS_POSTS,
    variables: {
      page: 1,
      pageSize: 2,
    },
  },
  result: {
    data: {
      newsPosts: {
        data: [],
      },
    },
  },
};

export const newsPostsMockFail = {
  request: {
    query: GET_NEWS_POSTS,
  },
  response: {
    errrors: [],
  },
};

export const fetchMoreMockSuccess = {
  request: {
    query: GET_NEWS_POSTS,
    variables: {
      page: 2,
      pageSize: 2,
    },
  },
  result: {
    data: {
      newsPosts: {
        data: [
          {
            id: '3',
            attributes: {
              tytul: 'Test title 3',
              tresc: 'Test content 3',
              opcjonalneZdjecie: {
                data: [],
              },
              publishedAt: '2022-12-08T20:02:50.607Z',
            },
          },
          {
            id: '4',
            attributes: {
              tytul: 'Test title 4',
              tresc: 'Test content 4',
              opcjonalneZdjecie: {
                data: [],
              },
              publishedAt: '2022-12-07T20:02:30.513Z',
            },
          },
        ],
      },
    },
  },
};

export const fetchMoreMockFail = {
  request: {
    query: GET_NEWS_POSTS,
  },
  result: {
    errors: [],
  },
};

export const fetchMoreOfMonthMockSuccess = {
  request: {
    query: GET_NEWS_POSTS,
    variables: { page: 1, pageSize: 100, startDate: '2022-11-01T00:00:00.265Z', endDate: '2022-12-01T00:00:00.265Z' },
  },
  result: {
    data: {
      newsPosts: {
        data: [
          {
            id: '3',
            attributes: {
              tytul: 'Listopad title test 1',
              tresc: 'Listopad content test 1',
              opcjonalneZdjecie: {
                data: [],
              },
              publishedAt: '2022-11-11T20:03:26.379Z',
            },
          },
          {
            id: '4',
            attributes: {
              tytul: 'Listopad title test 2',
              tresc: 'Listopad content test 2',
              opcjonalneZdjecie: {
                data: [],
              },
              publishedAt: '2022-11-02T20:03:26.379Z',
            },
          },
        ],
      },
    },
  },
};
export const fetchMoreOfMonthMockFail = {
  request: {
    query: GET_NEWS_POSTS,
    variables: { page: 1, pageSize: 2, startDate: '2022-11-01T00:00:00.265Z', endDate: '2022-12-01T00:00:00.265Z' },
  },
  result: {
    data: [],
  },
};

export const dummyFetchMock = {
  request: {
    query: GET_NEWS_POSTS,
  },
  result: {
    data: [],
  },
};

// Gallery

export const apolloGalleryGroupInfoMockSuccess = {
  data: {
    groups: {
      data: [
        {
          attributes: {
            nazwaGrupy: 'Test gorup name',
            numerGrupy: '1',
            foldery_zdjec: {
              data: [
                {
                  id: '3',
                  attributes: {
                    nazwaFolderu: 'M.D. House - ciekawy serial',
                    slug: 'house-serial',
                    publishedAt: '2023-01-10T22:25:54.989Z',
                    miniaturaFolderu: {
                      data: {
                        attributes: {
                          alternativeText: 'test alt text',
                          url: '/uploads/test.jpg',
                        },
                      },
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    },
  },
  loading: false,
  networkStatus: 7,
};

export const apolloGalleryGroupInfoZeroFoldersMockSuccess = {
  data: {
    groups: {
      data: [
        {
          attributes: {
            nazwaGrupy: 'Test gorup name',
            numerGrupy: '1',
            foldery_zdjec: {
              data: [],
            },
          },
        },
      ],
    },
  },
  loading: false,
  networkStatus: 7,
};

export const apolloImagesFolderInfoMockSuccess = {
  data: {
    groups: {
      data: [
        {
          attributes: {
            nazwaGrupy: 'Test group name',
            numerGrupy: '1',
            foldery_zdjec: {
              data: [
                {
                  id: '1',
                  attributes: {
                    nazwaFolderu: 'Test folder name',
                    slug: 'house-serial',
                    publishedAt: '2023-01-10T22:25:54.989Z',
                    zdjecia: {
                      data: [
                        {
                          id: '1',
                          attributes: {
                            url: '/uploads/test-url1.jpg',
                            alternativeText: 'test alt 1',
                          },
                        },
                        {
                          id: '2',
                          attributes: {
                            url: '/uploads/test-url2.jpg',
                            alternativeText: 'test alt 2',
                          },
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    },
  },

  loading: false,
  networkStatus: 7,
};
