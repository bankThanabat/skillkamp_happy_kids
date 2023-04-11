/* eslint-disable indent */
import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import Icon from './icon/Icon';
import { IconType } from '../enum/icon.enum';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Menu } from '@headlessui/react';
import ModalCartPage from '../pages/ModalCartPage';

const Navbar = (props) => {
  const [cartVisible, setCartVisible] = useState(false);
  const numOfProductsInCart = useSelector((state) => state.numOfProductsInCart);
  const isLoggedin = useSelector((state) => state.isLoggedin ?? false);
  const history = useNavigate();

  const toggleCart = () => {
    setCartVisible(!cartVisible);
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
  return (
    <>
      <nav><div className="flex w-full h-12 bg-neutral-800 justify-center items-center">
        <p className="text-xl text-white font-patrick-hand font-light">{'Free Shipping Over $50'}</p>
      </div><div className="w-full h-[20vh] bg-white flex justify-center items-center">
          <h1 className="text-7xl font-patrick-hand">{'happy kids'}</h1>
        </div><div className="w-full h-[10vh] bg-white grid grid-col-3">
          <div className="grid grid-cols-4 px-5">
            <div className="col-span-2 col-start-2 w-full h-full flex gap-20 justify-center items-center">
              {menu.filter((e) => e.isActive).map((e) => <p key={e.id
              } className="text-xl font-patrick-hand font-light"> <Link to={e.path}> {e.name} </Link> </p>)}
            </div>
            <div className='col-span-1  flex items-center justify-start gap-5 '>
              <Menu as="div" className='z-10'>
                <Menu.Button>
                  <div className='flex gap-2 items-center'>
                    <div className='w-[25px] aspect-square rounded-full bg-black text-white flex items-center justify-center '>B</div>
                    <Icon type={IconType.chevronDown} />
                  </div>
                </Menu.Button>
                <Menu.Items className={`mt-2 border bg-white px-3 py-2 absolute w-auto flex flex-col`}>
                  <Menu.Item>
                    <p
                      className='hover:text-primary-main5'
                      onClick={() => {
                        history('/order', { state: { defaultTap: 1 } });
                      }}
                    >
                      My Orders
                    </p>
                  </Menu.Item>
                  <Menu.Item>
                    <p
                      className='hover:text-primary-main5'
                      onClick={() => {
                        history('/order', { state: { defaultTap: 2 } });
                      }}
                    >
                      My Address
                    </p>
                  </Menu.Item>
                  <Menu.Item>
                    <p
                      className='hover:text-primary-main5'
                      onClick={() => {
                        history('/order', { state: { defaultTap: 3 } });
                      }}
                    >
                      My Waltet
                    </p>
                  </Menu.Item>
                  <Menu.Item>
                    <p
                      className='hover:text-primary-main5'
                      onClick={() => {
                        history('/order', { state: { defaultTap: 4 } });
                      }}
                    >
                      My Wishlist
                    </p>
                  </Menu.Item>
                  <Menu.Item>
                    <p
                      className='hover:text-primary-main5'
                      onClick={() => {
                        history('/order', { state: { defaultTap: 5 } });
                      }}
                    >
                      My Subscriptions
                    </p>
                  </Menu.Item>
                  <Menu.Item>
                    <p
                      className='hover:text-primary-main5'
                      onClick={() => {
                        history('/order', { state: { defaultTap: 6 } });
                      }}
                    >
                      My Accounts
                    </p>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
              <div className="col-span-1  flex items-center justify-start gap-5 font-patrick-hand">
                {isLoggedin ? (
                  <Link to="/login">
                    <div className="flex gap-2 items-center">
                      <Icon className="w-[30px] h-[30px]" type={IconType.user} />
                      <div className="w-[60px] aspect-square rounded-full text-black flex items-center justify-center ">
                        Log In
                      </div>
                    </div>
                  </Link>
                ) : null}
                <button onClick={() => toggleCart()} className="flex gap-2 items-center">
                  <Icon type={IconType.cart} />
                  <div className="w-[18px] aspect-square rounded-full bg-black text-white flex items-center justify-center text-[10px]">
                    {numOfProductsInCart ?? 0}
                  </div>
                </button>
              </div>
            </div>
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
