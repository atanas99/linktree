// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/home',
  LINKTREE: '/linktree',
};

// ----------------------------------------------------------------------

export const paths = {
  // AUTH
    jwt: {
      signIn: `${ROOTS.AUTH}/jwt/sign-in`,
      signUp: `${ROOTS.AUTH}/jwt/sign-up`,
    },

  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
  },
  linkTree: {
    root: `${ROOTS.LINKTREE}/list`,
    create: `${ROOTS.LINKTREE}/create`,
  },
};
