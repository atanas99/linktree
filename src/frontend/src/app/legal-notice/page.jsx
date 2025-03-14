import {CONFIG} from 'src/config-global';
import {LegalNoticeView} from 'src/sections/legal-notice/components/LegalNoticeView';

// ----------------------------------------------------------------------

export const metadata = {title: `Create - ${CONFIG.site.name}`};

export default function Page() {
  return (
    <LegalNoticeView/>
  );
}
