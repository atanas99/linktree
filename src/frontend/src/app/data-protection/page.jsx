import {CONFIG} from 'src/config-global';
import {DataProtectionView} from 'src/sections/legal-notice/components/DataProtectionView';

// ----------------------------------------------------------------------

export const metadata = {title: `Data protection - ${CONFIG.site.name}`};

export default function Page() {
  return (
    <DataProtectionView/>
  );
}
