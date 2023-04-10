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

  const fetchData = async () => {
    const response = await getProductsNewArrivals();
    setNewArrivals(response?.data?.detail?.data?.catalog?.category?.productsWithMetaData?.list ?? []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-full">
      <Branner />
      <Newarrival products={newArrivals} />
      {cartVisible && <ModalCartPage hideCart={toggleCart} />}
    </div>
  );
};

export default ProductListPage;
