import {CONFIG} from 'src/config-global';
import {ProductsEditView} from "../../../sections/products/view/products-edit-view";

// ----------------------------------------------------------------------

export const metadata = {title: `Create - ${CONFIG.site.name}`};

export default function Page() {
  return (
    <ProductsEditView/>
  );
}
