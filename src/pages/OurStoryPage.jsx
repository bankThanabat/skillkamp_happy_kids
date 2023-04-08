/* eslint-disable linebreak-style */
import React from 'react';
import { Banner } from '../enum/banner.enum';
const OurStoryPage = () => {
  return (
    <>
      <img className="h-[65vh] w-screen object-cover " src={Banner.b4} />
      <div className="w-full h-[20vh] bg-white flex justify-center items-center">
        <h1 className="text-7xl font-patrick-hand">{'Our Story'}</h1>
      </div>
      <div className="grid justify-center mb-20">
        <p className="text-center font-patrick-hand mx-[28vw]">
          {`I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me and you can start
          adding your own content and make changes to the font. Feel free to
          drag and drop me anywhere you like on your page. I’m a great place for
          you to tell a story and let your users know a little more about you.`}
        </p>
        <br></br>
        <p className="text-center font-patrick-hand mx-[28vw]">
          {`This is a great space to write long text about your company and your
          services. You can use this space to go into a little more detail about
          your company. Talk about your team and what services you provide. Tell
          your visitors the story of how you came up with the idea for your
          business and what makes you different from your competitors. Make your
          company stand out and show your visitors who you are.`}
        </p>
      </div>
    </>
  );
};
export default OurStoryPage;
