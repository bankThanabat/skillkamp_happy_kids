/* eslint-disable indent */
import React, { useState } from 'react';
import Modal from 'react-modal';
import ProductModal from './ProductModal';
import { productType } from '../../prop-interface/product.type';


const Product = ({ dat }) => {
  const [hover, setHover] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      with: '500px',
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div
        className={`w-[100%] px-3 py-2 flex flex-col ${hover ? 'shadow-lg' : ''}`}
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseOut={() => {
          setHover(false);
        }}

        onClick={openModal}
      >
        <div className="relative flex flex-col items-center justify-center">
          <p className="absolute top-0 left-0 bg-[#D2461C] px-2 py-1 text-white text-[14px] ">
            SALE
          </p>
          <img className="" src={dat?.media[0]?.url ?? ''} />
          <div
            className={`${hover ?
              'bottom-10 ease-in duration-300' :
              'bottom-0 ease-out duration-300'
              } absolute  w-full`}
          >
            <div className="bg-white w-full h-[30px] opacity-50 absolute"></div>
            <p className="text-center pb-1 absolute w-full ">Quick View</p>
          </div>
        </div>
        <p className="text-center pb-1 bg-white w-full z-10">{dat?.name ?? ''}</p>
        <p className="text-center pb-1 z-10">{dat?.price ?? ''}</p>
        <button
          className="w-full py-3 border bg-white text-black"
          onClick={() => openModal()}
        >
          {' '}
          Add to Cart
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ProductModal key={dat.id} pdata={dat} closeModal={closeModal} />
          <div className="grid grid-cols-2">
            <div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

Product.propTypes = {
  dat: productType,
};

Product.defaultProps = {
  dat: {},
};

export default Product;
