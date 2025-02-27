import { CONFIG } from 'src/config-global';

import { HomeView } from 'src/sections/home/view';
import { LinktreeEditView } from 'src/sections/linktree/view/linktree-edit-view';
import {LinktreeViewView} from "../../../../sections/linktree-view/view/linktree-view-view";

// ----------------------------------------------------------------------

export const metadata = { title: `Create - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <LinktreeViewView />
  );
}
