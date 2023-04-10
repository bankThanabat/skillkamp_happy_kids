import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AddtoCart from '../components/buttons/AddtoCart';
import RelatedProduct from '../components/product/RelatedProduct';
import Hearticon from '../assets/icons/heart-thin.svg';

const ProductInfoPage = () => {
  const product = useLocation().state;
  const location = useLocation();
  const inputReference = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };
  useEffect(() => {
    inputReference.current.focus();
  }, []);
  return (
    <div className="flex flex-col mx-[20vw] mt-8" ref={inputReference}>
      <div className='flex justify-start'>
        <p className="text-gray-700 text-2xl font-patrick-hand">{location.pathname}</p>
      </div>
      <div className='grid grid-cols-2 my-20 gap-4'>
        <div>
          <img
            src="/src/assets/products/Product10.png"
            alt={product.name}
            className=""
          />
          <p className="text-gray-700 text-1xl font-patrick-hand">{product.description}</p>
        </div>
        <div className='flex flex-col gap-6'>
          <h1 className="text-5xl font-patrick-hand">{product.name}</h1>
          <p className='text-2xl font-patrick-hand'>Product ID:{product.id}</p>
          <div className="text-gray-700 text-3xl font-patrick-hand">${product.price.toFixed(2)}</div>
          <div>
            <p className="text-gray-700 text-2xl font-patrick-hand">color</p>
            <div className='flex flex-row gap-3 my-3'>
              <div className="w-6 h-6 rounded-full bg-blue-500"></div>
              <div className="w-6 h-6 rounded-full bg-blue-500"></div>
            </div>
          </div>
          <div>
            <p className="text-gray-700 text-2xl font-patrick-hand">size</p>
            <select className="block h-14 w-full rounded-md bg-gray-200 ring-black focus:border-gray-200 focus:bg-gray-200 focus:ring-0">
              <option value='Select'>Select</option>
              <option value="option1">option1</option>
              <option value="option2">option2</option>
              <option value="option3">option3</option>
            </select>
          </div>
          <div className='flex flex-row gap-2'>
            <div className='w-[90%]'><AddtoCart /></div>
            <div className='flex bg-red-500 hover:bg-red-700 rounded-lg w-[10%] justify-center items-center' ><img src={Hearticon} /></div>
          </div>
          <button className='flex bg-orange-500 hover:bg-orange-700 rounded-lg w-auto h-14 text-gray-700 text-2xl text-center justify-center align-middle items-center font-patrick-hand'>Buy Now</button>
          <div className='flex flex-col gap-2'>
            <div>
              <h4 className="text-gray-700 text-3xl font-patrick-hand" onClick={handleToggle}>Product Info</h4>
              {isVisible && (<p className="text-gray-700 text-5l font-patrick-hand">{product.info}</p>)}
            </div>
            <div>
              <h4 className="text-gray-700 text-3xl font-patrick-hand" onClick={handleToggle}>RETURN AND REFUND POLICY</h4>
              {isVisible && (<p className="text-gray-700 text-5l font-patrick-hand">I’m a return and refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.</p>)}
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center'>
        <h2 className='text-center text-3xl font-patrick-hand'>Related Product</h2>
        <RelatedProduct className='flex my-20' />

      </div>
    </div>


  );
};

export default ProductInfoPage;
