import {CONFIG} from 'src/config-global';
import {LinktreeEditView} from 'src/sections/linktree/view/linktree-edit-view';

// ----------------------------------------------------------------------

export const metadata = {title: `Edit linktree - ${CONFIG.site.name}`};

export default function Page() {
  return (
    <LinktreeEditView/>
  );
}
