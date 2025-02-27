

import { GuestGuard } from 'src/auth/guard';
import {AuthCenteredLayout} from "../../../layouts/auth-centered";

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  return (
    <GuestGuard>
      <AuthCenteredLayout>{children}</AuthCenteredLayout>
    </GuestGuard>
  );
}
