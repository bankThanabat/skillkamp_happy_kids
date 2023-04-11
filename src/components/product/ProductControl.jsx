import React from 'react';
import Icon from '../icon/Icon';
import { IconType } from '../../enum/icon.enum';

const ProductControl = () => {
  return (
    <div className='flex gap-5'>
      <div>
        <img className='w-[80px] aspect-square' src='https://static.wixstatic.com/media/45d10e_c59544c57e0943fdab8d109f81174032~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01/45d10e_c59544c57e0943fdab8d109f81174032~mv2.webp' />
      </div>
      <div className='flex flex-col'>
        <p className='text-sm font-light'>{`I'm a product`}</p>
        <p className='text-lg'>19,99₺</p>
        <div className='flex p-2 border text-sm font-light justify-between items-center'>
          <Icon type={IconType.minus} />
          0
          <Icon type={IconType.plus} />
        </div>
      </div>
    </div>
  );
};

export default ProductControl;
