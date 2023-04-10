import React from 'react';
import ProductList from './product/ProductList';
import PrimaryButton from './buttons/PrimaryButton';

const Newarrival = () => {
  return (
    <div className='flex flex-col justify-center items-center py-10'>
      <p className="text-3xl pb-30">New Arrivals</p>
      <ProductList />
      <div>
        <PrimaryButton />
      </div>
    </div>
  );
};

export default Newarrival;
