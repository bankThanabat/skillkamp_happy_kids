/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import Icon from './icon/Icon';
import { IconType } from '../enum/icon.enum';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Menu } from '@headlessui/react';
import ModalCartPage from '../pages/ModalCartPage';
import { getCart } from '../api/cartAPI';

const Navbar = (props) => {
  const [cartVisible, setCartVisible] = useState(false);
  const [itemInCart, setItemInCart] = useState(0);
  const numOfProductsInCart = useSelector((state) => state.numOfProductsInCart);
  const isLoggedin = useSelector((state) => state.isLoggedin ?? false);
  const user = useSelector((state) => state.user);
  const history = useNavigate();
  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  const fetchCart = async () => {
    try {
      const cart = await getCart();
      setItemInCart(cart ? cart?.data?.detail?.cart_list.length : 0);
    } catch (error) {
      console.log(error);
    }
  };

  const menu = [{
    id: 0,
    name: 'Home',
    path: '/',
    isActive: true,
  },
  {
    id: 1,
    name: 'Shop Collection',
    path: '/shopcollection',
    isActive: true,
  }, {
    id: 2,
    name: 'Our Story',
    path: '/ourstory',
    isActive: true,
  }, {
    id: 3,
    name: 'Contact',
    path: '/contact',
    isActive: true,
  }];

  useEffect(() => {
    fetchCart();
  }, [numOfProductsInCart]);

  return (
    <>
      <nav>
        <div className="flex w-full h-12 bg-neutral-800 justify-center items-center">
          <p className="text-xl text-white font-patrick-hand font-light">
            {'Free Shipping Over $50'}
          </p>
        </div>
        <div className="w-full sm:h-[20vh] h-[15vh] bg-white flex justify-center items-center">
          <h1 className="text-4xl sm:text-7xl font-patrick-hand">{'happy kids'}</h1>
        </div>
        <div className="w-full sm:h-[10vh] h-[15vh] bg-white grid sm:grid-cols-3 grid-cols-2">
          <div className="col-span-2  w-full h-full flex sm:gap-20 gap-5 justify-center items-center">
            {menu
              .filter((e) => e.isActive)
              .map((e) => (
                <p key={e.id} className="text-xl font-patrick-hand hidden md:block font-light">
                  <Link to={e.path}> {e.name} </Link>
                </p>
              ))}
          </div>
          <div className="sm:col-span-1 col-span-1 flex items-center justify-start gap-2">
            {isLoggedin ? (
              <Menu as="div" className="z-10">
                <Menu.Button>
                  <div className="flex gap-2 items-center">
                    <div className="w-[25px] aspect-square rounded-full bg-black text-white flex items-center justify-center">
                      {user?.Name ? user?.Name?.charAt(0).toUpperCase() : ''}
                    </div>
                    <Icon type={IconType.chevronDown} />
                  </div>
                </Menu.Button>
                <Menu.Items className="mt-2 border bg-white px-3 py-2 absolute w-auto flex flex-col">
                  <Menu.Item>
                    <p
                      className="hover:text-primary-main5"
                      onClick={() => {
                        history('/order', { state: { defaultTap: 1 } });
                      }}
                    >
                      My Orders
                    </p>
                  </Menu.Item>
                  <Menu.Item>
                    <p
                      className="hover:text-primary-main5"
                      onClick={() => {
                        history('/order', { state: { defaultTap: 2 } });
                      }}
                    >
                      My Address
                    </p>
                  </Menu.Item>
                  <Menu.Item>
                    <p
                      className="hover:text-primary-main5"
                      onClick={() => {
                        history('/order', { state: { defaultTap: 3 } });
                      }}
                    >
                      My Wallet
                    </p>
                  </Menu.Item>
                  <Menu.Item>
                    <p
                      className="hover:text-primary-main5"
                      onClick={() => {
                        history('/order', { state: { defaultTap: 4 } });
                      }}
                    >
                      My Wishlist
                    </p>
                  </Menu.Item>
                  <Menu.Item>
                    <p
                      className="hover:text-primary-main5"
                      onClick={() => {
                        history('/order', { state: { defaultTap: 5 } });
                      }}
                    >
                      My Subscriptions
                    </p>
                  </Menu.Item>
                  <Menu.Item>
                    <p
                      className="hover:text-primary-main5"
                      onClick={() => {
                        history('/order', { state: { defaultTap: 6 } });
                      }}
                    >
                      My Accounts
                    </p>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            ) : (null)}
            <div className="sm:col-span-1 col-span-1 flex items-center justify-start gap-2 font-patrick-hand">
              {!isLoggedin ? (
                <Link to="/login">
                  <div className="flex gap-2 items-center pl-5">
                    <Icon className="w-[30px] h-[30px]" type={IconType.user} />
                    <div className="w-[60px] aspect-square rounded-full text-black flex items-center justify-center">
                      Log In
                    </div>
                  </div>
                </Link>
              ) : null}
              <button onClick={() => toggleCart()} className="flex gap-2 items-center">
                <Icon type={IconType.cart} />
                <div className="w-[18px] aspect-square rounded-full bg-black text-white flex items-center justify-center text-[10px]">
                  {itemInCart ?? 0}
                </div>
              </button>
            </div>
          </div>
          <div className="sm:hidden flex items-center justify-end mr-5">
            <FiMenu size={24} />
          </div>
        </div>
      </nav>
      <hr className="h-px mt-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <Outlet />
      {/* <ModalCartPage/> */}
      {cartVisible && <ModalCartPage hideCart={toggleCart} />}
    </>

  );
};

Navbar.propTypes = {
  toggleCart: PropTypes.func,
};

export default Navbar;
