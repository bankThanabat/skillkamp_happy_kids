import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Banner} from '../enum/banner.enum';
import Icon from './icon/Icon';
import { IconType } from '../enum/icon.enum';

const Branner = () => {
  return (
    <Carousel className
      infiniteLoop={true}
      showThumbs={false}
      renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <div
            className='absolute
            } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20'
            onClick={clickHandler}
          >
            <Icon type={IconType.chevronLeft} />
          </div>
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <div
            className='absolute
             top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20'
            onClick={clickHandler}
          >
            <Icon type={IconType.chevronRight} />
          </div>
        );
      }}
    >
      <div>
        <img className="h-[65vh] w-screen object-cover " src={Banner.b1} />
      </div>
      <div>
        <img className="h-[65vh] w-screen object-cover " src={Banner.b2} />
      </div>
      <div>
        <img className="h-[65vh] w-screen  object-cover " src={Banner.b3} />
      </div>
    </Carousel>
  );
};

export default Branner;
