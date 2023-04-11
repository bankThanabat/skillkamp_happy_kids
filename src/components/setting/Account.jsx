import React from 'react';
import PropTypes from 'prop-types';

const Account = ({ name = '' }) => {
  return (
    <>
      <div className='flex flex-col gap-5  py-10'>
        <p className='text-4xl'>MY Account</p>
        <p className='font-light text-sm'>{`View and edit your personal info below.`}</p>
      </div>
      <div className='w-full  flex flex-col border-y py-[10px]  gap-5'>
        <label className='font-light text-xl'>Account</label>
        <p className='font-light' >{`Update your personal information.`}</p>
        <label className='font-light text-lg'>Name</label>
        {name.length > 0 ? (
          <p className='font-light' >{name}</p>
        ) : (
          <p className='font-light' >{`you haven't logged in yet.`}</p>
        )
        }
      </div>
    </>
  );
};

Account.propTypes = {
  name: PropTypes.string,
};
export default Account;
