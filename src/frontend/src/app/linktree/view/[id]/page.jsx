import {CONFIG} from 'src/config-global';
import {LinktreeView} from "../../../../sections/linktree-view/view/linktree-view";

// ----------------------------------------------------------------------

export const metadata = {title: `View linktree - ${CONFIG.site.name}`};

export default function Page({params}) {
  const {id} = params;
  return (
    <LinktreeView userId={id}/>
  );
}
