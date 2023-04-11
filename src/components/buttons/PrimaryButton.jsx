import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryButton = () => {
  return (
    <div className='mt-14 mb-2'>
      <Link to="/shopcollection" >
        <button className='bg-[#282828] w-[147px] h-[40px] px-3 py-2 text-white'>Shop All</button>
      </Link>
    </div>
  );
};

export default PrimaryButton;
