import React from 'react';
import DiscountedProducts from '../components/DiscountedProducts/DiscountedProducts';
import ScrollToTop from '../components/scroll/ScrollToTop';

const SalePage = () => {
  return (
    <div>
       <ScrollToTop />
      <DiscountedProducts />
    </div>
  );
};

export default SalePage;