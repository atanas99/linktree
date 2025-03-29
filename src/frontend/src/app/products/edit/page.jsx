import {CONFIG} from 'src/config-global';
import {ProductsEditView} from "../../../sections/products/view/products-edit-view";

// ----------------------------------------------------------------------

export const metadata = {title: `Edit products - ${CONFIG.site.name}`};

export default function Page() {
  return (
    <ProductsEditView/>
  );
}
