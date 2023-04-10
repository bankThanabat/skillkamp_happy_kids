import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

const StorePolicyPage = () => {
  const bottomRef = useRef(null);
  const content = useLocation().state;
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  const scrollBottom = () => bottomRef.current.scrollIntoView();
  useEffect(() => {
    if (content) {
      scrollBottom();
    } else {
      scrollTop();
    }
  }, []);


  return (
    <div className='grid justify-center mx-[28vw] my-12'>
      <div className="text-5xl font-patrick-hand text-center">
        Store Policy
      </div>
      <div className="grid justify-center my-8">
        <h2 className='text-3xl font-patrick-hand text-center my-8'>CUSTOMER CARE</h2>
        <div className="grid justify-center text-center font-patrick-hand text-lg">
          <p className='mb-8'>I’m a customer care section. I’m a great place to write a long text about your company and your services, and, most importantly, how to contact your store with queries. Writing a detailed Customer Care policy is a great way to build trust and reassure your customers that they can buy with confidence.</p>
          <p className='mb-8'>{`I'm the second paragraph in your customer care section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.`}</p>
        </div>
      </div>
      <div className="text-5xl font-patrick-hand text-center">
        <h2 className='text-3xl font-patrick-hand text-center my-8'>PRIVACY & SAFETY</h2>
        <div className="grid justify-center text-center font-patrick-hand text-lg">
          <p className='mb-8'>I’m a privacy & safety policy section. I’m a great place to inform your customers about how you use, store, and protect their personal information. Add details such as how you use third-party banking to verify payment, the way you collect data or when will you contact users after their purchase was completed successfully.</p>
          <p className='mb-8'>Your user’s privacy is of the highest importance to your business, so take the time to write an accurate and detailed policy. Use straightforward language to gain their trust and make sure they keep coming back to your site!</p>
        </div>
      </div>
      <div className="text-5xl font-patrick-hand text-center">
        <h2 className='text-3xl font-patrick-hand text-center my-8'>WHOLESALE INQUIRIES</h2>
        <div className="grid justify-center text-center font-patrick-hand text-lg">
          <p className='mb-8'>I’m a wholesale inquiries section. I’m a great place to inform other retailers about how they can sell your stunning products. Use plain language and give as much information as possible in order to promote your business and take it to the next level!</p>
          <p className='mb-8'>{`I'm the second paragraph in your wholesale inquiries section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you`}</p>
        </div>
      </div>
      <div ref={bottomRef} className="text-5xl font-patrick-hand text-center">
        <h2 className='text-3xl font-patrick-hand text-center my-8'>PAYMENT METHODS</h2>
        <div className="grid justify-center text-center font-patrick-hand text-2xl">
          <p className='mb-8'>- Credit / Debit Cards</p>
          <p className='mb-8'>- PAYPAL</p>
          <p className='mb-8'>- Offline Payments</p>
        </div>
      </div>
    </div>
  );
};

export default StorePolicyPage;
