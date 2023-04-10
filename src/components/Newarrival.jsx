import React from 'react';
import ProductList from './product/ProductList';
import PrimaryButton from './buttons/PrimaryButton';
import PropTypes from 'prop-types';

const Newarrival = ({ products }) => {
  return (
    <div className='flex flex-col justify-center items-center py-10'>
      <p className="text-3xl pb-30">New Arrivals</p>
      <ProductList products={products} />
      <div>
        <PrimaryButton />
      </div>
    </div>
  );
};

Newarrival.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

Newarrival.defaultProps = {
  products: [],
};

export default Newarrival;
