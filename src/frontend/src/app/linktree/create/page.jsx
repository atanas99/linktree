import { CONFIG } from 'src/config-global';

import { HomeView } from 'src/sections/home/view';
import { LinktreeCreateView } from 'src/sections/linktree/view/linktree-create-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Create - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <LinktreeCreateView />
  );
}