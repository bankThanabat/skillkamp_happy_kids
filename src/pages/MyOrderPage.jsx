import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const MyOrderPage = () => {
  return (
    <div className='w-[60%] m-auto flex gap-10 py-10'>
      <div className='flex flex-col w-[30%] gap-10'>
        <div className='relative flex flex-col px-3 py-10 items-center justify-center gap-5 border'>
          <img src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className='w-[90px] aspect-square rounded-full' />
          <p className='font-light text-sm'>John Smith</p>
          <BsThreeDotsVertical className="absolute  top-5 right-5" />
        </div>
        <div className='px-5 py-2 border flex flex-col gap-4'>
          <p className='font-light text-sm'>My Orders</p>
          <p className='font-light text-sm'>My Orders</p>
          <p className='font-light text-sm'>My Orders</p>
          <p className='font-light text-sm'>My Orders</p>
          <p className='font-light text-sm'>My Orders</p>
          <p className='font-light text-sm'>My Orders</p>
        </div>
      </div>
      <div className='w-[65%] border  px-5 '>
        <div className='flex flex-col gap-5  py-10'>
          <p className='text-6xl'>My Orders</p>
          <p className='font-light text-sm'>View your order history or check the status of a recent order.</p>
        </div>
        <div className='w-full  flex flex-col border-y py-[100px] items-center gap-5'>
          <p className='font-light' >{`You haven't placed any orders yet.`}</p>
          <p className='font-light text-sm underline'>Start Browsing</p>
        </div>
      </div>
    </div>
  );
};

export default MyOrderPage;
