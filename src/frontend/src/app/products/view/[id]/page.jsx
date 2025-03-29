import {CONFIG} from 'src/config-global';
import {ProductsView} from "../../../../sections/products-view/view/products-view";

// ----------------------------------------------------------------------

export const metadata = {title: `View products - ${CONFIG.site.name}`};

export default function Page({params}) {
  const {id} = params;
  return (
    <ProductsView userId={id}/>
  );
}
