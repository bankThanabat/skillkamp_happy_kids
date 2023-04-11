/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from '../components/icon/Icon';
import { IconType } from '../enum/icon.enum';
import ProductControl from '../components/product/ProductControl';
import { useDispatch, useSelector } from 'react-redux';
import { actionTypes } from '../store/action.type';
import { removeItemFromCart, updateCartItem } from '../api/cartAPI';

const ModalCartPage = (props) => {
  const { hideCart } = props;
  const [total, setTotal] = React.useState(parseFloat(0));
  const cart = useSelector((state) => state.cart ?? []);
  const dispatch = useDispatch();
  console.log('cart', cart);

  const onUpdateCartItem = async (product) => {
    await updateCartItem({ ...product });
  };

  const onRemoveItemCart = async (product) => {
    await removeItemFromCart({ ...product });
  };

  const onINcreaseQty = (product) => {
    try {
      onUpdateCartItem(product);
      dispatch({ type: actionTypes.update_cart_item, payload: { ...product, qty: parseInt(product?.qty ?? 1) + 1 } });
    } catch (error) {
      console.log(error);
    }
  };

  const onDecreaseQty = (product) => {
    try {
      onUpdateCartItem(product);
      dispatch({ type: actionTypes.update_cart_item, payload: { ...product, qty: parseInt(product?.qty ?? 1) - 1 } });
    } catch (error) {
      console.log(error);
    }
  };

  const onRemoveItem = (product) => {
    try {
      onRemoveItemCart(product);
      dispatch({ type: actionTypes.remove_cart_item, payload: product?.id });
    } catch (error) {
      console.log(error);
    }
  };

  const calSubtotal = () => {
    const total = cart.reduce((acc, item) => {
      return (acc + (parseFloat(item?.qty ?? 1) * parseFloat(item?.price ?? 0)));
    }, 0);
    setTotal(total.toFixed(2));
  };


  useEffect(() => {
    calSubtotal();
  }, [cart]);


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
            {cart && cart.map((item) => (
              <div className='relative '>
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
          <div className="text-2xl ml-6 mb-6">{`${parseFloat(total ?? 0).toFixed(2).toString()}`}$</div>
        </body>
        <footer className="flex  h-[10%] justify-center items-center ">
          <button className="flex items-center bg-gray-800 text-primary-main2 justify-center   h-10  w-[80%]  ">
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
