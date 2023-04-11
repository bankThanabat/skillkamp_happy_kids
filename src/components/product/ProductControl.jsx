import React from 'react';
import Icon from '../icon/Icon';
import { IconType } from '../../enum/icon.enum';
import PropTypes from 'prop-types';

const ProductControl = ({ product, onDecreaseQty, onINcreaseQty }) => {
  const [controledProduct, _] = React.useState({
    ...product,
    qty: parseInt(product?.qty ?? 1),
  } ?? {});
  return (
    <div className='relative flex gap-5'>

      <div>
        <img className='w-[80px] aspect-square' src={`${product?.media[0]?.url ?? ''}`} />
      </div>
      <div className='flex flex-col'>
        <p className='text-sm font-light'>{`I'm a product`}</p>
        <p className='text-lg'>{product?.formattedPrice ?? ''}</p>
        <div className='flex p-2 border text-sm font-light justify-between items-center'>
          <Icon type={IconType.minus} onClick={() => onDecreaseQty(controledProduct)} />
          {product?.qty ?? 1}
          <Icon type={IconType.plus} onClick={() => onINcreaseQty(controledProduct)} />
        </div>
      </div>
    </div>
  );
};

ProductControl.propTypes = {
  product: PropTypes.object,
  onDecreaseQty: PropTypes.func,
  onINcreaseQty: PropTypes.func,
};

export default ProductControl;
