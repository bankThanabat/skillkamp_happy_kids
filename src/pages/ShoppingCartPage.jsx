import React, { useState, useEffect } from 'react';
import ProductCart from '../components/product/ProductCart';
import Icon from '../components/icon/Icon';
import { IconType } from '../enum/icon.enum';
import { getCart } from '../api/cartAPI';
import { useNavigate } from 'react-router-dom';

const ShoppingCartPage = () => {
  const [code, setCode] = useState(false);
  const [note, setNote] = useState(false);
  const [cart, setCart] = useState({});
  const history = useNavigate();

  const fetchCart = async () => {
    try {
      const cart = await getCart();
      setCart(cart ? cart?.data?.detail : {});
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div>
      <div className="w-3/5 flex gap-5 mx-auto mt-8">
        <div className='w-[70%] flex flex-col'>
          <div className='border-b border-neutral-500 py-5'>My cart</div>
          {cart?.cart_list && cart?.cart_list?.map((product, i) => (
            <ProductCart key={i} product={product} />
          ))}
          <div onClick={() => setCode(!code)} className='flex justify-start items-center py-5 text-red-500 gap-2 font-light cursor-pointer'>
            <Icon type={IconType.tag} />
            <p>Enter a promo code</p>
          </div>
          {code && <div className='w-full'>
            <input className='py-3 px-2 border w-2/5 border-black' type='text' placeholder='Enter a promo code' />
            <button className='py-3 px-2 w-1/5 text-red-500 border-red-500 border'>Apply</button>
          </div>}
          <div onClick={() => setNote(!note)} className='flex justify-start items-center py-5 text-red-500 gap-2 font-light cursor-pointer'>
            <Icon type={IconType.note} />
            <p>Add a note</p>
          </div>
          {note && <div className='w-full'>
            <textarea className='py-3 px-2 border w-3/5 border-black' type='text' placeholder='Instructions? Special requests? Add them here.' />

          </div>}

        </div>
        <div className='w-[30%] flex flex-col '>
          <div className='border-b border-neutral-500 py-5'>Order summary</div>
          <div className='flex flex-col border-b border-neutral-500 py-4'>
            <div className='flex justify-between py-3'>
              <p>Subtotal</p>
              <p>{cart?.sub_total ?? ''}₺</p>
            </div>
            <div className='flex justify-between py-2'>
              <p>Shipping </p>
              <p>{cart?.shipping || 'FREE'}</p>
            </div>
            <div className='flex justify-between underline'>
              <p>Bangkok, Thailand</p>
            </div>
          </div>
          <div className='flex justify-between py-3 text-lg'>
            <p>Total</p>
            <p>{cart?.total ?? ''}₺</p>
          </div>
          <button
            onClick={() => history('/home')}
            className='w-full py-2 font-light bg-primary-main1 text-white'>Checkout</button>
          <div className='flex justify-center items-center py-3 gap-2'>
            <Icon type={IconType.lock} />
            <p>Secure Checkout</p>
          </div>
        </div>
        {/* Your shopping cart items and summary go here */}
      </div>
    </div>
  );
};

export default ShoppingCartPage;
