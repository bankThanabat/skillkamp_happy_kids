import React from 'react';

const Subscriptions = () => {
  return (
    <>
      <div className='flex flex-col gap-5  py-10'>
        <p className='text-4xl'>My Subscriptions</p>
        <p className='font-light text-sm'>{`View and manage the subscriptions you've purchased`}</p>
      </div>
      <div className='w-full  flex flex-col border-y py-[100px] items-center gap-5'>
        <p className='font-light' >{`You haven't purchased any subscriptions yet.`}</p>
      </div>
    </>
  );
};

export default Subscriptions;
