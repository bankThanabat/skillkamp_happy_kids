import React from 'react';

const Address = () => {
  return (
    <>
      <div className='flex flex-col gap-5  py-10'>
        <p className='text-4xl'>My Address</p>
        <p className='font-light text-sm'>Add and manage the addresses you use often.</p>
      </div>
      <div className='w-full  flex flex-col border-y py-[100px] items-center gap-5'>
        <p className='font-light text-sm underline'>{`You haven't saved any addresses yet.`}</p>
      </div>
    </>
  );
};

export default Address;
