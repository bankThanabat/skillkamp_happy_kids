import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../components/icon/Icon';
import { IconType } from '../enum/icon.enum';
import ProductControl from '../components/product/ProductControl';

const ModalCartPage = (props) => {
  const { hideCart } = props;
  return (
    <div className="font-patrick-hand bg-black bg-opacity-20 z-10 flex justify-end inset-0 text-slate-50 fixed">
      <div className="bg-slate-50 w-[300px] h-screen  ">
        <header className=" text-center bg-gray-800 h-[10%] w-full flex relative items-center justify-center  text-xl ">
          <button onClick={hideCart} className="h-5 w-10 absolute left-5">
            <Icon type={IconType.chevronRight} />
          </button>
          <div className="flex justify-center items-center">Cart</div>
        </header>
        <body className="flex flex-wrap flex-col justify-end h-[80%] text-black">
          <div className='h-[80%] overflow-hidden gap-10 flex flex-col  px-10'><ProductControl /><ProductControl /><ProductControl /><ProductControl /><ProductControl /><ProductControl /></div>
          <div className="text-2xl ml-6">Subtotal</div>
          <div className="text-2xl ml-6 mb-6">???$</div>
        </body>
        <footer className="flex  h-[10%] justify-center items-center ">
          <button className="flex items-center bg-gray-800 text-primary-main2 justify-center   h-10  w-[80%]  ">
            View Cart
          </button>
        </footer>
      </div>
    </div>
  );
};

ModalCartPage.propTypes = {
  hideCart: PropTypes.func.isRequired,
};

export default ModalCartPage;
