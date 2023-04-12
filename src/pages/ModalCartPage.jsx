/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from '../components/icon/Icon';
import { IconType } from '../enum/icon.enum';
import ProductControl from '../components/product/ProductControl';
import { getCart, removeItemFromCart, updateCartItem } from '../api/cartAPI';
import { useDispatch } from 'react-redux';
import { actionTypes } from '../store/action.type';
import { useNavigate } from 'react-router-dom';

const ModalCartPage = (props) => {
  const { hideCart } = props;
  const [cart, setCart] = React.useState({});
  const dispatch = useDispatch();
  const history = useNavigate();

  const fetchCart = async () => {
    try {
      const cart = await getCart();
      setCart(cart ? cart?.data?.detail : {});
    } catch (error) {
      console.log(error);
    }
  };

  const onINcreaseQty = async (product) => {
    try {
      const cart = await updateCartItem({ ...product, qty: parseInt(product.qty) + 1 });
      setCart(cart ? { ...cart?.data?.detail } : {});
    } catch (error) {
      console.log(error);
    }
  };

  const onDecreaseQty = async (product) => {
    try {
      let cart = {};
      if (parseInt(product.qty) - 1 <= 0) {
        cart = await removeItemFromCart(product);
      } else {
        cart = await updateCartItem({ ...product, qty: parseInt(product.qty) - 1 });
      }
      setCart(cart ? { ...cart?.data?.detail } : {});
    } catch (error) {
      console.log(error);
    }
  };

  const onRemoveItem = async (product) => {
    try {
      const cart = await removeItemFromCart(product);
      setCart(cart ? { ...cart?.data?.detail } : {});
      dispatch({ type: actionTypes.remove_cart_item });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);


  return (
    <div className="font-patrick-hand bg-black bg-opacity-20 z-10 flex justify-end inset-0 text-slate-50 fixed">
      <div className="bg-slate-50 w-[300px] h-screen  ">
        <header className=" text-center bg-gray-800 h-[10%] w-full flex relative items-center justify-center  text-xl ">
          <button onClick={hideCart} className="h-5 w-10 absolute left-5">
            <Icon type={IconType.chevronRight} />
          </button>
          <div className="flex justify-center items-center">Cart</div>
        </header>
        <body className="flex flex-wrap flex-col justify-end h-[80%] text-black">
          <div className='h-[80%] overflow-scroll gap-10 flex flex-col  px-10 '>
            {cart?.cart_list && cart.cart_list.map((item, index) => (
              <div className='relative ' key={index}>
                <Icon
                  type={IconType.minus}
                  onClick={() => onRemoveItem(item)}
                  className='absolute z-10 top-1 right-0 text-xl text-white bg-black bg-opacity-50 rounded-full p-1 cursor-pointer'
                />
                <ProductControl
                  key={item.id}
                  product={item}
                  onDecreaseQty={onDecreaseQty}
                  onINcreaseQty={onINcreaseQty} />
              </div>
            ))}

          </div>
          <div className="text-2xl ml-6">Subtotal</div>
          <div className="text-2xl ml-6 mb-6">{cart?.sub_total ?? ''}$</div>
        </body>
        <footer className="flex  h-[10%] justify-center items-center ">
          <button
            onClick={() => {
              hideCart();
              history('/shopping-cart');
            }}
            className="flex items-center bg-gray-800 text-primary-main2 justify-center   h-10  w-[80%]  ">
            View Cart
          </button>
        </footer>
      </div>
    </div>
  );
};

ModalCartPage.propTypes = {
  hideCart: PropTypes.func.isRequired,
};

export default ModalCartPage;
