import React from 'react';
import Icon from './icon/Icon';
import {IconType} from '../enum/icon.enum';


const Navbar = () => {
  const menu = [{
    id: 0,
    name: 'Home',
    isActive: true,
  },
  {
    id: 1,
    name: 'Shop Collection',
    isActive: true,
  }, {
    id: 2,
    name: 'Our Story',
    isActive: true,
  }, {
    id: 3,
    name: 'Contact',
    isActive: true,
  }];
  return (
    <nav><div className="flex w-full h-12 bg-neutral-800 justify-center items-center">
      <p className="text-xl text-white font-patrick-hand font-light">{'Free Shipping Over $50'}</p>
    </div><div className="w-full h-[20vh] bg-white flex justify-center items-center">
      <h1 className="text-7xl font-patrick-hand">{'happy kids'}</h1>
    </div><div className="w-full h-[10vh] bg-white grid grid-col-3">
      <div className="grid grid-cols-4 px-5">
        <div className="col-span-2 col-start-2 w-full h-full flex gap-20 justify-center items-center">
          {menu.filter((e)=>e.isActive).map((e)=><p key={e.id
          } className="text-xl font-patrick-hand font-light">{e.name}</p>)}
        </div>
        <div className='col-span-1  flex items-center justify-start gap-5'>
          <div className='flex gap-2 items-center'>
            <div className='w-[25px] aspect-square rounded-full bg-black text-white flex items-center justify-center '>B</div>
            <Icon type={IconType.chevronDown} />
          </div>
          <div className='flex gap-2 items-center'>
            <Icon type={IconType.cart} />
            <div className='w-[18px] aspect-square rounded-full bg-black text-white flex items-center justify-center text-[10px]'>0</div>
          </div>
        </div>
      </div>
    </div></nav>
  );
};

export default Navbar;
