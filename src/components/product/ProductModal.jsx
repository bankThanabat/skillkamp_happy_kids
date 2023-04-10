import React, { useState } from 'react';
import product10 from '../../assets/products/Product10.png';
import AddtoCart from '../buttons/AddtoCart';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { actionTypes } from '../../store/action.type';

const ProductModal = ({ pdata }) => {
  const dispatch = useDispatch();
  const showId = (pdata) => {
    history('/home/product', { state: pdata });
  };
  const history = useNavigate();
  const [color, setColor] = useState('');
  return (
    <div className="relative p-6 flex-auto">
      <div className="grid grid-cols-2">
        <img className="" src={product10} />
        <div>
          <br></br>
          <p className="text-[20px]  top-0 left-0 pb-3">{pdata?.name ?? ''}</p>
          <p className="text-[20px]  top-0 left-0 pb-3">{pdata?.price ?? ''}</p>
          <p className="text-[15px]  top-0 left-0 pb-3">{pdata?.id ?? ''}</p>
          <p className="w-full text-[15px]  top-0 left-0 pb-3">
            Color : {color}{' '}
          </p>
          <div className="pb-3">
            <input
              type="radio"
              className=""
              onClick={() => setColor('White')}
            ></input>
            <label className=""> White</label>
          </div>
          <p className="text-[15px]  top-0 left-0 pb-3">Size</p>
          <div className="pb-3">
            <select
              name="size"
              id="size"
              className=" border border-gray-300 w-full h-[40px]"
            >
              <option value="12">12-18 months</option>
              <option value="18">18-24 months</option>
              <option value="2">2 years</option>
              <option value="3">3 years</option>
            </select>
          </div>
          <p className="text-[15px]  top-0 left-0 pb-3">Quantity</p>
          <div className="pb-5">
            <input
              type="number"
              className=" border border-gray-300 w-[60px] h-[30px]"
              value={1}
            ></input>
          </div>
          <div className="bottom-0 pb-3" onClick={() => {
            dispatch({ type: actionTypes.add_cart_item, payload: pdata });
          }}>
            <AddtoCart />
          </div>
          <p onClick={() => showId(pdata)}>{'View more details'}</p>
        </div>
      </div>
    </div>
  );
};

ProductModal.propTypes = {
  pdata: PropTypes.object,
};

export default ProductModal;
