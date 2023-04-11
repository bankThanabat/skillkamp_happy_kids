import React from 'react';

const OrderHistory = () => {
  return (
    <>
      <div className='flex flex-col gap-5  py-10'>
        <p className='text-4xl'>My Orders</p>
        <p className='font-light text-sm'>View your order history or check the status of a recent order.</p>
      </div>
      <div className='w-full  flex flex-col border-y py-[100px] items-center gap-5'>
        <p className='font-light' >{`You haven't placed any orders yet.`}</p>
        <p className='font-light text-sm underline'>Start Browsing</p>
      </div>
    </>
  );
};

export default OrderHistory;
