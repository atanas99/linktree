import {paths} from 'src/routes/paths';

import packageJson from '../package.json';

// ----------------------------------------------------------------------

export const CONFIG = {
  site: {
    name: 'mylinks',
    serverUrl: "http://localhost:8080",
    assetURL: "http://localhost:3033",
    basePath: "http://localhost:3033",
    version: packageJson.version,
  },
  isStaticExport: JSON.parse(`${process.env.BUILD_STATIC_EXPORT}`),
  auth: {
    method: 'jwt',
    skip: false,
    redirectPath: paths.dashboard.root,
  },

};
