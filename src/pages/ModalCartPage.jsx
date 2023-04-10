import React from 'react';
import PropTypes from 'prop-types';

const ModalCartPage = (props) => {
  const { hideCart } = props;
  return (
    <div className="font-patrick-hand bg-black bg-opacity-20 flex justify-end inset-0 text-slate-50 fixed">
      <div className="bg-slate-50 w-[300px] h-screen  ">
        <header className=" text-center bg-gray-800 h-[10%] w-full flex flex-col  text-xl ">
          <button onClick={hideCart} className="h-5 w-10 justify-start ">
            X
          </button>
          <div className="flex justify-center items-center">Cart</div>
        </header>
        <body className="flex flex-wrap flex-col justify-end h-[80%] text-black">
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
