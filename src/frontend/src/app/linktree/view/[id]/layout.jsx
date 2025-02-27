import { CONFIG } from 'src/config-global';
import { DashboardLayout } from 'src/layouts/dashboard';
import { SimpleLayout } from 'src/layouts/simple';
import {AuthGuard, GuestGuard} from 'src/auth/guard';

// ----------------------------------------------------------------------

export default function Layout({ children }) {

  return (
    <SimpleLayout>{children}</SimpleLayout>
  );
}
