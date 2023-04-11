import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import OrderHistory from '../components/setting/OrderHistory';
import Address from '../components/setting/Address';
import Wallet from '../components/setting/Wallet';
import Wishlist from '../components/setting/Wishlist';
import Subscriptions from '../components/setting/Subscription';
import Account from '../components/setting/Account';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const MyOrderPage = () => {
  const { state: { defaultTap } } = useLocation();
  const [tap, setTap] = React.useState(defaultTap ?? 1);
  const user = useSelector((state) => state.user);

  const handleTap = () => {
    switch (tap) {
      case 1:
        return <OrderHistory />;
      case 2:
        return <Address />;
      case 3:
        return <Wallet />;
      case 4:
        return <Wishlist />;
      case 5:
        return <Subscriptions />;
      case 6:
        return <Account name={user?.name ?? ''} />;

      default:
        return <OrderHistory />;
    }
  };

  return (
    <div className='w-[60%] m-auto flex gap-10 py-10'>
      <div className='flex flex-col w-[30%] gap-10'>
        <div className='relative flex flex-col px-3 py-10 items-center justify-center gap-5 border'>
          <img src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className='w-[90px] aspect-square rounded-full' />
          <p className='font-light text-sm'>{user?.name ?? ''}</p>
          <BsThreeDotsVertical className="absolute  top-5 right-5" />
        </div>
        <div className='px-5 py-2 border flex flex-col gap-4'>
          <p className='font-light text-sm hover:text-primary-main5' onClick={() => setTap(1)}>My Orders</p>
          <p className='font-light text-sm hover:text-primary-main5' onClick={() => setTap(2)} >My Address</p>
          <p className='font-light text-sm hover:text-primary-main5' onClick={() => setTap(3)} >My Wallet</p>
          <p className='font-light text-sm hover:text-primary-main5' onClick={() => setTap(4)} >My Wishlist</p>
          <p className='font-light text-sm hover:text-primary-main5' onClick={() => setTap(5)} >My Subscription</p>
          <p className='font-light text-sm hover:text-primary-main5' onClick={() => setTap(6)} >My Account</p>
        </div>
      </div>
      <div className='w-[65%] border  px-5 '>
        {tap && handleTap(tap)}
      </div>
    </div>
  );
};

export default MyOrderPage;
