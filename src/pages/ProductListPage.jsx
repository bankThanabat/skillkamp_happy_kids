import React, { useState, useEffect } from 'react';
import Branner from '../components/Branner';
import Newarrival from '../components/Newarrival';
import ModalCartPage from './ModalCartPage';
import { getProductsNewArrivals } from '../api/productAPI';

const ProductListPage = () => {
  const [cartVisible, setCartVisible] = useState(false);
  const [newArrivals, setNewArrivals] = useState([]);

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  const fetchNewArraivalProducts = async () => {
    const response = await getProductsNewArrivals();
    setNewArrivals(response?.data?.detail?.data?.catalog?.category?.productsWithMetaData?.list ?? []);
  };

  useEffect(() => {
    fetchNewArraivalProducts();
  }, []);

  return (
    <div className="w-full h-full">
      <Branner />
      <div className="md:grid sm:grid-cols-2 gap-5 ">
        <div className="pr-2 sm:col-span-2 ">
          <Newarrival products={newArrivals} />
        </div>
        <div className="sm:pl-2">
          {cartVisible && <ModalCartPage hideCart={toggleCart} />}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
