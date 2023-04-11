/* eslint-disable linebreak-style */
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product';
import { IconType } from '../../enum/icon.enum';
import Icon from '../icon/Icon';
import PropTypes from 'prop-types';
import { productArrayType } from '../../prop-interface/product.type';


export const Dataproduct = [
  {
    id: 0,
    name: 'product1',
    price: 100,
    info: 'I\'m a product detail.I\'m a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.',
    description:
      ' I\'m a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.',
    isActive: true,
  },
  {
    id: 1,
    name: 'product2',
    price: 100,
    info: 'I\'m a product detail.I\'m a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.',
    description:
      ' I\'m a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.',
    isActive: true,
  },
  {
    id: 2,
    name: 'product3',
    price: 100,
    info: 'I\'m a product detail.I\'m a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.',
    description:
      ' I\'m a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.',
    isActive: true,
  },
  {
    id: 3,
    name: 'product4',
    price: 100,
    info: 'I\'m a product detail.I\'m a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.',
    description:
      ' I\'m a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.',
    isActive: true,
  },
  {
    id: 4,
    name: 'product5',
    price: 100,
    info: 'I\'m a product detail.I\'m a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.',
    description:
      ' I\'m a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.',
    isActive: true,
  },
  {
    id: 5,
    name: 'product6',
    price: 100,
    info: 'I\'m a product detail.I\'m a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.',
    description:
      ' I\'m a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.',
    isActive: true,
  },
  {
    id: 6,
    name: 'product7',
    price: 100,
    info: 'I\'m a product detail.I\'m a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.',
    description:
      ' I\'m a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.',
    isActive: true,
  },
  {
    id: 7,
    name: 'product8',
    price: 100,
    info: 'I\'m a product detail.I\'m a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.',
    description:
      ' I\'m a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.',
    isActive: true,
  },
];

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      className="w-[50px] h-[50px] z-50 absolute left-5"
      onClick={() => onClick()}
    >
      <Icon type={IconType.chevronLeft} />
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      className="w-[50px] h-[50px] z-50 absolute right-0"
      onClick={() => onClick()}
    >
      <Icon type={IconType.chevronRight} />
    </button>
  );
};

const ProductList = ({ products }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4500, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="w-full ">
      <Carousel
        arrows={true}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        swipeable={true}
        draggable={false}
        autoPlay={true}
        showDots={false}
        transitionDuration={300}
        responsive={responsive}
        infinite={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        containerClass="carousel-container px-10"
      >
        {products.map((e) => (
          <Product key={e.id} dat={e} />
        ))}
      </Carousel>
    </div>
  );
};

ProductList.propTypes = {
  products: productArrayType,
};

CustomLeftArrow.propTypes = {
  onClick: PropTypes.func,
};

CustomRightArrow.propTypes = {
  onClick: PropTypes.func,
};

ProductList.defaultProps = {
  products: [],
};


export default ProductList;
