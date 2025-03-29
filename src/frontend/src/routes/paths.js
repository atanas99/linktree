// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/home',
  LINKTREE: '/linktree',
  PRODUCTS: '/products'
};

// ----------------------------------------------------------------------

//ALL PATHS IN THE APPLICATION
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
    root: `${ROOTS.LINKTREE}/edit`,
    view: (id) => `${ROOTS.LINKTREE}/view/${id}`,
  },

  products: {
    edit: `${ROOTS.PRODUCTS}/edit`,
    view: (id) => `${ROOTS.PRODUCTS}/view/${id}`
  },
  legalNotice: '/legal-notice',
  dataProtection: '/data-protection'
};
