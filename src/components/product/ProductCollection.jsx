import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ProductModal from './ProductModal';
import PropTypes from 'prop-types';

const ProductCollection = ({ dat }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
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

  useEffect(() => {
    Modal.setAppElement('body');
  }, []);
  return (
    <div className="w-[95%]">
      <div className="relative flex flex-col items-center justify-center">
        <img className="" src={dat?.media[0]?.url ?? ''} />
      </div>
      <p className="text-center pb-1 bg-white w-full z-10">{dat.name}</p>
      <p className="text-center pb-1 z-10">{dat.formattedPrice ?? ''}</p>
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
        <ProductModal pdata={dat} />
        <div className="grid grid-cols-2">
          <div>{/* <p>View more details</p> */}</div>
        </div>
      </Modal>
    </div>
  );
};

ProductCollection.propTypes = {
  dat: PropTypes.object,
};

export default ProductCollection;
