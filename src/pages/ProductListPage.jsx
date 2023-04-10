import React, { useState, useEffect } from 'react';
import Branner from '../components/Branner';
import Newarrival from '../components/Newarrival';
import ModalCartPage from './ModalCartPage';
import { getProductsNewArrivals, getProductsBySKU } from '../api/productAPI';

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

  const fetchProductDetail = async () => {
    const response = await getProductsBySKU({ sku: 1 });
    console.log(response);
  };

  useEffect(() => {
    fetchNewArraivalProducts();
    fetchProductDetail();
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
