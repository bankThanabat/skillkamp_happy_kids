import React, { useEffect } from 'react';

const ShippingPage = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    scrollTop();
  }, []);
  return (
    <div className='grid justify-center mx-[28vw] my-12'>
      <div className="text-5xl font-patrick-hand text-center">
        Shipping & Returns
      </div>
      <div className="grid justify-center my-8">
        <h2 className='text-3xl font-patrick-hand text-center my-8'>SHIPPING POLICY</h2>
        <div className="grid justify-center text-center font-patrick-hand text-lg">
          <p className='mb-8'>I’m a shipping policy section. I’m a great place to update your customers about your shipping methods, packaging and costs. Use plain, straightforward language to build trust and make sure that your customers stay loyal!</p>
          <p className='mb-8'>{`I'm the second paragraph in your shipping policy section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.`}</p>
        </div>
      </div>
      <div className="text-5xl font-patrick-hand text-center">
        <h2 className='text-3xl font-patrick-hand text-center my-8'>RETURN & EXCHANGE POLICY</h2>
        <div className="grid justify-center text-center font-patrick-hand text-lg">
          <p className='mb-8'>I’m a return policy section. I’m a great place to let your customers know what to do in case they’ve changed their mind about their purchase, or if they’re dissatisfied with a product. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.</p>
          <p className='mb-8'>{`I'm the second paragraph in your return & exchange policy. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.`}</p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;
