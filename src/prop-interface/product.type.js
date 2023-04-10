import PropTypes from 'prop-types';

const productOptionType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
});

const productMediaType = PropTypes.shape({
  url: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  mediaType: PropTypes.string.isRequired,
  altText: PropTypes.string,
  title: PropTypes.string.isRequired,
});

const productInventoryType = PropTypes.shape({
  quantity: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
});

const productType = PropTypes.shape({
  discountedPrice: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  formattedDiscountedPrice: PropTypes.string.isRequired,
  formattedPrice: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  inventory: productInventoryType.isRequired,
  isInStock: PropTypes.bool.isRequired,
  media: PropTypes.arrayOf(productMediaType).isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(productOptionType).isRequired,
  price: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  ribbon: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired,
  urlPart: PropTypes.string.isRequired,
});

const productArrayType = PropTypes.arrayOf(productType);

export {
  productOptionType,
  productMediaType,
  productInventoryType,
  productArrayType,
  productType,
};
