import React from 'react';
import ProductByCategory from '../components/productByCategory/ProductByCategory';
import ScrollToTop from '../components/scroll/ScrollToTop';

const ProductByCategoryPage = (props) => {
  return(
    <div>
    <ScrollToTop />
    <ProductByCategory {...props} />
    </div>
  );
};

export default ProductByCategoryPage;
