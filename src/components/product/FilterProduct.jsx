import React from 'react';
import Icon from '../icon/Icon';
import { IconType } from '../../enum/icon.enum';
import { useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const FilterProduct = () => {
  const [showCollection, setShowCollection] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [showSize, setShowSize] = useState(false);
  const [hoverColor, setHoverColor] = useState('');
  const [price, setPrice] = useState([0, 20]);

  const color = [{
    id: 0,
    name: 'Blue',
    color: 'rgb(69, 69, 143)',
  },
  {
    id: 1,
    name: 'Cream',
    color: 'rgb(250, 250, 239)',
  },
  {
    id: 2,
    name: 'Green',
    color: 'rgb(134, 173, 145)',
  },
  ];

  // const
  return (
    <div className='flex flex-col items-center px-10 py-5 gap-3 bg-white'>
      <div className='py-5 border-b w-full'>
        <p className="font-light text-2xl ">Filter by</p>
      </div>
      <div className='py-5 border-b w-full flex flex-col justify-between '>
        <div className='flex justify-between items-center'>
          <p className="font-light">Collection</p>
          <div onClick={() => {
            setShowCollection(!showCollection);
          }}>
            {showCollection ? <Icon type={IconType.minus} className={'cursor-pointer'} /> : <Icon type={IconType.plus} className={'cursor-pointer'} />}

          </div>
        </div>
        <div className={`${showCollection ? '  opacity-1 h-auto py-3' : 'opacity-0 py-0 h-0'}   w-full  transition-all duration-300 ease-in-out flex flex-col gap-1 font-light text-sm`}>
          <p className={`${true ? 'font-semibold' : 'hover:text-neutral-600'}  cursor-pointer`}>All</p>
          <p className={`${false ? 'font-semibold' : 'hover:text-neutral-600'}  cursor-pointer`}>BodySuite</p>
        </div>
      </div>
      <div className='py-5 border-b w-full flex flex-col justify-between '>
        <div className='flex justify-between items-center'>
          <p className="font-light">Price</p>
          <div onClick={() => {
            setShowPrice(!showPrice);
          }}>
            {showPrice ? <Icon type={IconType.minus} className={'cursor-pointer'} /> : <Icon type={IconType.plus} className={'cursor-pointer'} />}

          </div>
        </div>
        <div className={`${showPrice ? '  opacity-1 h-auto py-3' : 'opacity-0 py-0 h-0'}  w-full  transition-all duration-300 ease-in-out flex flex-col gap-1 font-light text-sm`}>
          <RangeSlider min={0} max={20} defaultValue={[0, 20]} onInput={(e) => setPrice(e)} className={' bg-primary-main1'} />
          <div className='flex justify-between'>
            <p>{price[0]} $</p>
            <p>{price[1]} $</p>
          </div>
        </div>
      </div>
      <div className='py-5 border-b w-full flex flex-col justify-between '>
        <div className='flex justify-between items-center'>
          <p className="font-light">Color {hoverColor ? `: ${hoverColor}` : ''}</p>
          <div onClick={() => {
            setShowColor(!showColor);
          }}>
            {showColor ? <Icon type={IconType.minus} className={'cursor-pointer'} /> : <Icon type={IconType.plus} className={'cursor-pointer'} />}
          </div>
        </div>
        <div className={`${showColor ? '  opacity-1 h-auto py-3' : 'opacity-0 py-0 h-0'}  w-full  transition-all duration-300 ease-in-out flex flex-col gap-1 font-light text-sm`}>

          <div className={`flex gap-2 ${showColor ? '' : 'hidden'}`}>
            {color.map((e, i) => {
              return (<div key={i} className={`rounded-full aspect-square w-[27px] p-[2px]`}>
                <div className='hover:opacity-70 w-full h-full rounded-full cursor-pointer' style={{ backgroundColor: e.color }} onMouseEnter={() => setHoverColor(e.name)} onMouseLeave={() => setHoverColor('')}></div>
              </div>);
            })}
          </div>
        </div>
      </div>
      <div className='py-5 border-b w-full flex flex-col justify-between '>
        <div className='flex justify-between items-center'>
          <p className="font-light">Size</p>
          <div onClick={() => {
            setShowSize(!showSize);
          }}>
            {showSize ? <Icon type={IconType.minus} className={'cursor-pointer'} /> : <Icon type={IconType.plus} className={'cursor-pointer'} />}

          </div>
        </div>
        <div className=''></div>
      </div>


    </div>
  );
};

export default FilterProduct;