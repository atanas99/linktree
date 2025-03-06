import {CONFIG} from 'src/config-global';
import {LinktreeViewView} from "../../../../sections/linktree-view/view/linktree-view-view";

// ----------------------------------------------------------------------

export const metadata = {title: `Create - ${CONFIG.site.name}`};

export default function Page({params}) {
  const {id} = params;
  return (
    <LinktreeViewView userId={id}/>
  );
}
