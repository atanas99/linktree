import {GuestGuard} from 'src/auth/guard';
import {AuthCenteredLayout} from "../../../layouts/auth-centered";

// ----------------------------------------------------------------------

export default function Layout({children}) {
  return (
    <GuestGuard>
      <AuthCenteredLayout section={{title: 'Hi, Welcome back'}}>{children}</AuthCenteredLayout>
    </GuestGuard>
  );
}
