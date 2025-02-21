// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/home',
  LINKTREE: '/linktree',
};

// ----------------------------------------------------------------------

export const paths = {
  // AUTH
    auth: {
      signIn: `${ROOTS.AUTH}/sign-in`,
      signUp: `${ROOTS.AUTH}/sign-up`,
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
