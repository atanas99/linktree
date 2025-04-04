import 'src/global.css';

// ----------------------------------------------------------------------
import {CONFIG} from 'src/config-global';
import {primary} from 'src/theme/core/palette';
import {ThemeProvider} from 'src/theme/theme-provider';
import {getInitColorSchemeScript} from 'src/theme/color-scheme-script';

import {ProgressBar} from 'src/components/progress-bar';
import {MotionLazy} from 'src/components/animate/motion-lazy';
import {detectSettings} from 'src/components/settings/server';
import {defaultSettings, SettingsDrawer, SettingsProvider} from 'src/components/settings';

import {AuthProvider} from 'src/auth/context/jwt';
import {Snackbar} from "../components/snackbar";

// ----------------------------------------------------------------------

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: primary.main,
};

export default async function RootLayout({children}) {
  const settings = CONFIG.isStaticExport ? defaultSettings : await detectSettings();

  return (
    <html lang="en" suppressHydrationWarning>
    <body>
    {getInitColorSchemeScript}

    <AuthProvider>
      <SettingsProvider
        settings={settings}
        caches={CONFIG.isStaticExport ? 'localStorage' : 'cookie'}
      >
        <ThemeProvider>
          <MotionLazy>
            <Snackbar/>
            <ProgressBar/>
            <SettingsDrawer/>
            {children}
          </MotionLazy>
        </ThemeProvider>
      </SettingsProvider>
    </AuthProvider>
    </body>
    </html>
  );
}
