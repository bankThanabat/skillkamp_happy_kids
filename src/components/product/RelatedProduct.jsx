/* eslint-disable linebreak-style */
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RelatedProductCard from './RelatedProductCard';
import { IconType } from '../../enum/icon.enum';
import Icon from '../icon/Icon';
import PropTypes from 'prop-types';

const RelatedProduct = ({ products }) => {
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
  return (
    <div className="w-auto">
      <Carousel
        arrows={true}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        swipeable={true}
        draggable={false}
        // autoPlay={true}
        showDots={false}
        transitionDuration={300}
        responsive={responsive}
        infinite={false}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        containerClass="carousel-container px-10"
      >
        {products && products.map((e) => (
          <RelatedProductCard key={e.id} dat={e} />
        ))}
      </Carousel>
    </div>
  );
};

RelatedProduct.propTypes = {
  onClick: PropTypes.func,
  products: PropTypes.array.isRequired,
};

export default RelatedProduct;
