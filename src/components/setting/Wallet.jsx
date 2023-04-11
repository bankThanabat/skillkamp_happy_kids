import React from 'react';

const Wallet = () => {
  return (
    <>
      <div className='flex flex-col gap-5  py-10'>
        <p className='text-4xl'>My Wallet</p>
        <p className='font-light text-sm'>Save your credit and debit card details for faster checkout.</p>
      </div>
      <div className='w-full  flex flex-col border-y py-[100px] items-center gap-5'>
        <p className='font-light' >{`You Haven’t Saved Any Cards Yet`}</p>
        <p className='font-light text-sm text-primary-main4'>Securely save your payment details when you place an order at checkout.</p>
      </div>
    </>
  );
};

export default Wallet;
