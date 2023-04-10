import React, { useEffect } from 'react';

const FAQPage = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    scrollTop();
  }, []);
  return (
    <div className='grid justify-center mx-[28vw] my-12'>
      <div className="text-5xl font-patrick-hand text-center">FAQ</div>
      <div className='text-3xl font-patrick-hand text-center my-8'>searchbar</div>
      <div className='flex flex-col'>
        <div className='text-3xl font-patrick-hand my-8' >
          <p >General</p>
        </div>
        <div>
          <div className='font-patrick-hand' >
            <div className='flex flex-row my-6'>
              <h3 className='text-3xl font-patrick-hand text-start'>How do I add a new question & answer?</h3>
            </div>
            <p className='font-patrick-hand text-start my-8'>To add a new FAQ follow these steps:</p>
            <p >1. Click “Manage FAQs” button</p>
            <p>2. From your site’s dashboard you can add, edit and manage all your questions and answers</p>
            <p>3. Each question and answer should be added to a category</p>
            <p>4. Save and publish.</p>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          </div>
          <div className='font-patrick-hand'>
            <div className='flex flex-row my-6'>
              <h3 className='text-3xl font-patrick-hand text-start'>Can I insert an image, video, or gif in my FAQ?</h3>
            </div>
            <p className='font-patrick-hand text-start my-8'>Yes. To add media follow these steps:</p>
            <p>1. Enter the app’s Settings</p>
            <p>2. Click on the “Manage FAQs” button</p>
            <p>3. Select the question you would like to add media to</p>
            <p>4. When editing your answer click on the camera, video, or GIF icon</p>
            <p>5. Add media from your library.</p>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQPage;
