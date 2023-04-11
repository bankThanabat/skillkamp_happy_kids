import React from 'react';

const Wishlist = () => {
  return (
    <>
      <div className='flex flex-col gap-5  py-10'>
        <p className='text-4xl'>My Wishlist</p>
        <p className='font-light text-sm'>View favorite products you’ve saved to your wishlist.</p>
      </div>
      <div className='w-full  flex flex-col border-y py-[100px] items-center gap-5'>
        <p className='font-light' >{`You Haven’t Saved Any wishlst Yet`}</p>
      </div>
    </>
  );
};

export default Wishlist;
