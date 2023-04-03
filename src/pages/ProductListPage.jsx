import React from 'react';

const ProductListPage = () => {
  return (
    <div className="w-full h-full">
      <div className="flex w-full h-12 bg-neutral-800 justify-center items-center">
        <p className="text-xl text-white font-patrick-hand font-light" >{'Free Shipping Over $50'}</p>
      </div>
      <div className="w-full h-[20vh] bg-white flex justify-center items-center">
        <h1 className="text-7xl font-patrick-hand">{'happy kids'}</h1>
      </div>
      <div className="w-full h-[10vh] bg-white grid grid-col-3">
        <div className="col-start-1 col-end-1">
          <div className="w-full h-full flex justify-center items-center">
            <button>Home</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
