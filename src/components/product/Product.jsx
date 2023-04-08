import React, { useState } from 'react';
import product from '../../assets/products/Product10.png';

const Product = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className='w-[100%] px-3 py-2 flex flex-col'
      onMouseOver={()=>{
        setHover(true);
      }}
      onMouseOut={()=>{
        setHover(false);
      }}>
      <div className='relative flex flex-col items-center justify-center'>
        <p className='absolute top-0 left-0 bg-[#D2461C] px-2 py-1 text-white text-[14px] '>SALE</p>
        <img className='' src={product} />
        <div className={`${hover ? 'bottom-10 ease-in duration-300':'bottom-0 ease-out duration-300'} absolute  w-full`}>
          <div className='bg-white w-full h-[30px] opacity-50 absolute'>

          </div>
          <p className='text-center pb-1 absolute w-full '>Quick View</p>
        </div>
      </div>
      <p className='text-center pb-1 bg-white w-full z-10'>I'm product</p>
      <p className='text-center pb-1 z-10'>19,99₺</p>
      <button className="w-full py-3 border bg-white text-black"> Add to Cart</button>
    </div>
  );
};

export default Product;
