import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded p-4">
      <img
        src={product?.image ?? ''}
        alt={product?.name ?? ''}
        className="w-full h-48 object-cover mb-4"
      />
      <Link to={`/product/${product?.id ?? ''}`} className="font-bold text-lg">
        {product?.name ?? ''}
      </Link>
      <div className="text-gray-700">${product.price.toFixed(2)}</div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

ProductCard.defaultProps = {
  product: {
    id: null,
    name: '',
    image: '',
    price: 0,
  },
};

export default ProductCard;
