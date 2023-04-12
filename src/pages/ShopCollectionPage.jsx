import React, { useEffect, useState } from 'react';
import ProductCollection from '../components/product/ProductCollection';
import FilterProduct from '../components/product/FilterProduct';
import { getProducts } from '../api/productAPI';

const ShopCollection = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await getProducts();
    setProducts(response?.data?.detail?.data?.catalog?.category?.productsWithMetaData?.list ?? []);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <p className="text-center font-patrick-hand mx-auto md:mx-[28vw] text-3xl md:text-[30px]">
        ShopCollection
      </p>
      <div className="grid-container grid grid-cols-1 md:grid-cols-11">
        <div className="col-span-1 md:col-span-2">
          <p className="left-1 text-3xl md:text-[30px] ml-2">Filter by</p>
          <FilterProduct />
        </div>
        <div className="col-span-1 md:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {products.map((e) => (
              <ProductCollection key={e.id} dat={e} />
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default ShopCollection;
