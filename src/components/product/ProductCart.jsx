import React from 'react';
import Icon from '../icon/Icon';
import { IconType } from '../../enum/icon.enum';
import PropTypes from 'prop-types';

const ProductCart = ({ product }) => {
  const calPrice = () => (parseFloat(product?.price) * parseFloat(product?.qty)).toFixed(2);

  return (
    <div className='flex items-center h-full gap-4 border-b border-neutral-500 py-5'>
      <img className='bg-white  border-neutral-500 w-[100px] aspect-square' src={product?.fullUrl ?? ''} />
      <div className='flex flex-col justify-between items-between h-full text-sm w-[50%]'>
        <p>{product?.name ?? ''}</p>
        <div>
          <p>{product?.price ?? ''}₺</p>
          <p>Color: {product?.color ?? ''}</p>
          <p>Size: {product?.size ?? ''}</p>
        </div>
      </div>
      <div className='flex h-full w-[35%] justify-between'>
        <div className='h-full'>
          <div className='flex px-2 py-1 border text-sm font-light justify-between items-center  gap-4 '>
            <Icon type={IconType.minus} onClick={() => onDecreaseQty(controledProduct)} />
            {product?.qty ?? 1}
            <Icon type={IconType.plus} onClick={() => onINcreaseQty(controledProduct)} />
          </div>
        </div>
        <div className='h-full'>
          <p className='text-sm font-light'>{calPrice().toString()}</p>
        </div>
        <div className='h-full'>
          <Icon type={IconType.close} />
        </div>
      </div>


    </div>
  );
};

ProductCart.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCart;
