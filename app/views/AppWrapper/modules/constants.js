export const NAV_MENU_ITEMS = [
  [
    {
      id: 0,
      label: 'Home',
      path: '/',
    },
    {
      id: 1,
      label: 'Example Grid Page',
      path: '/example-grid',
    },
    {
      id: 2,
      label: 'Blank Page',
      path: '/example-blank',
    },
  ], [
    {
      id: 1,
      label: 'MVP Features',
      path: '/',
      labelDecoration: 'dev',
    },
    {
      id: 2,
      label: 'Future Features',
      path: '/',
      labelDecoration: 'dev',
    },
    {
      id: 2,
      label: 'Component Guide',
      path: '/',
      labelDecoration: 'dev',
    },
  ],
];

export const PRODUCT_MENU_ITEMS = [
  [
    {
      id: 0,
      label: 'Payments',
      path: '/',
    },
    {
      id: 1,
      label: 'Communication & Engagement',
      path: '/',
    },
    {
      id: 2,
      label: 'Metrics & Insights',
      path: '/',
    },
  ], [
    {
      id: 3,
      label: 'Show Me More >',
      path: '/',
    },
  ],
];

export const SUPPORT_MENU_ITEMS = [
  {
    id: 0,
    label: 'MenuItem1',
    path: '/',
  },
  {
    id: 1,
    label: 'MenuItem2',
    path: '/',
  },
  {
    id: 2,
    label: 'MenuItem3',
    path: '/',
  },
];

export const AVATAR_MENU_ITEMS = [
  [
    {
      id: 0,
      label: 'My Profile',
      path: '/',
    },
    {
      id: 1,
      label: 'My Views',
      path: '/',
    },
  ], [
    {
      id: 2,
      label: 'Log Out',
      path: '/',
    },
  ], [
    {
      id: 3,
      label: 'Altegra Health Plan',
      path: '/',
    },
    {
      id: 4,
      label: 'Lorem Ipsum Plan',
      path: '/',
    },
  ],
];

export const SINGLE_SELECT_GROUP_ITEMS = [
  'All my claims',
  'New claims today',
  'Greater than $500',
  {
    title: 'Single select section 1',
    data: ['Choice E', 'Choice F'],
  },
  {
    title: 'Single select section 2',
    data: ['Choice G', 'Choice H'],
  },
];

export const MULTI_SELECT_GROUP_ITEMS = [
  {
    id: '1',
    text: 'Option A',
    count: 33,
    tooltipText: 'members',
  },
  {
    id: '2',
    text: 'Option B',
    count: 54,
    tooltipText: 'members',
  },
  {
    id: '3',
    text: 'Option C',
    count: 23,
    tooltipText: 'associates',
  },
];

export const DEFAULT_LOGO_REDIRECT_PATH = '/';

export const ON_PRODUCT_MENU_SELECT = 'app/views/AppWrapper/ON_PRODUCT_MENU_SELECT';
export const ON_NAV_MENU_SELECT = 'app/views/AppWrapper/ON_NAV_MENU_SELECT';
export const ON_MULTI_GROUP_CHECK = 'app/views/AppWrapper/ON_MULTI_GROUP_CHECK';
export const ON_MULTI_GROUP_CHECK_HEADER = 'app/view/AppWrapper/ON_MULTI_GROUP_CHECK_HEADER';
export const ON_SINGLE_GROUP_SELECT = 'app/view/AppWrapper/ON_SINGLE_GROUP_SELECT';
export const TEST_API_REQUESTED = 'app/views/AppWrapper/TEST_API_REQUESTED';
export const TEST_API_SUCCEEDED = 'app/views/AppWrapper/TEST_API_SUCCEEDED';
export const TEST_API_FAILED = 'app/views/AppWrapper/TEST_API_FAILED';
