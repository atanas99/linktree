import {CONFIG} from 'src/config-global';

import {HomeView} from "../../sections/home/view/home-view";

// ----------------------------------------------------------------------

export const metadata = {title: `Home - ${CONFIG.site.name}`};

export default function Page() {
  return (
    <HomeView/>
  );
}
