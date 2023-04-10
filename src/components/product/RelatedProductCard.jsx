import React, { useState } from 'react';
import productpic from '../../assets/products/Product10.png';
import AddtoCart from '../buttons/AddtoCart';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const RelatedProductCard = ({ dat }) => {
  const [hover, setHover] = useState(false);
  const showId = (dat) => {
    history('/home/product', { state: dat });
  };
  const history = useNavigate();
  return (
    <>
      <div
        className="w-[100%] px-3 py-2 flex flex-col"
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseOut={() => {
          setHover(false);
        }}

        onClick={() => showId(dat)}
      >
        <div className="relative flex flex-col items-center justify-center">
          <img className="" src={productpic} />
        </div>
        <p className="text-center pb-1 bg-white w-full z-10">{dat.name}</p>
        <p className="text-center pb-1 z-10">{dat.price}</p>
        <AddtoCart />
      </div>
    </>
  );
};

RelatedProductCard.propTypes = {
  dat: PropTypes.object,
};
export default RelatedProductCard;
