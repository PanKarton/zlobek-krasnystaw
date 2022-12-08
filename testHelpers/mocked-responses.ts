import { GET_NEWS_POSTS } from 'graphql/queries';

export const apolloContactInfoMockResponse = {
  data: {
    contactInfo: {
      data: {
        attributes: {
          typename: 'test',
          phoneNumber: '123',
          email: 'test@test.pl',
          openDays: 'mon - fri',
          adress: { typename: 'test', city: 'Hajduszoboszlo', name: 'testName', street: 'testStreet' },
          openHours: {
            typename: 'test',
            openTime: 'testOpen',
            closeTime: 'testClose',
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
          layette: [
            {
              id: 1,
              name: 'Test layette item one',
            },
            {
              id: 2,
              name: 'Test layette item two',
            },
            {
              id: 3,
              name: 'Test layette item three',
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
          daySchedule: [
            {
              id: '13',
              hours: '6:00 - 8:00',
              name: 'przyjmowanie dzieci do żłobka',
            },
            {
              id: '14',
              hours: '8:00 – 8:30',
              name: 'śniadanie',
            },
            {
              id: '15',
              hours: '8:30 – 9:00',
              name: 'dowolne zabawy w grupie',
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
          monthlyFee: 'test100',
          dailyFoodFee: 'test7',
          bankName: 'test BS Krasnystaw',
          accountNumber: 'test 36 8200 0008 2001 0010 3567 0006',
        },
      },
    },
  },
  loading: false,
  networkStatus: 7,
};

export const apolloStaffMockResponse = {
  data: {
    staff: {
      data: {
        attributes: {
          directors: [
            {
              id: 1,
              name: 'Test director',
            },
          ],
          serviceWorkers: [
            {
              id: 1,
              name: 'Test service worker',
            },
          ],
          babysitters: [
            {
              id: 1,
              name: 'Test babysitter',
            },
          ],
        },
      },
    },
  },
  loading: false,
  networkStatus: 7,
};

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
              title: 'Test title 1',
              content: 'Test content 1',
              image: {
                data: [],
              },
              publishedAt: '2022-12-02T20:03:26.379Z',
            },
          },
          {
            id: '2',
            attributes: {
              title: 'Test title 2',
              content: 'Test content 2',
              image: {
                data: [],
              },
              publishedAt: '2022-13-02T20:03:26.379Z',
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
              title: 'Test title 3',
              content: 'Test content 3',
              image: {
                data: [],
              },
              publishedAt: '2022-12-02T20:03:26.379Z',
            },
          },
          {
            id: '4',
            attributes: {
              title: 'Test title 4',
              content: 'Test content 4',
              image: {
                data: [],
              },
              publishedAt: '2022-13-02T20:03:26.379Z',
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
              title: 'Listopad title test 1',
              content: 'Listopad content test 1',
              image: {
                data: [],
              },
              publishedAt: '2022-11-11T20:03:26.379Z',
            },
          },
          {
            id: '4',
            attributes: {
              title: 'Listopad title test 2',
              content: 'Listopad content test 2',
              image: {
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
    variables: { page: 1, pageSize: 100, startDate: '2022-11-01T00:00:00.265Z', endDate: '2022-12-01T00:00:00.265Z' },
  },
  result: {
    data: [],
  },
};
