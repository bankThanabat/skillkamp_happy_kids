import React, { useState } from 'react';
import AddtoCart from '../buttons/AddtoCart';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { actionTypes } from '../../store/action.type';
import { addItemToCart } from '../../api/cartAPI';

const ProductModal = ({ pdata, closeModal }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({ ...pdata } ?? {});

  const showId = (pdata) => {
    history(`/product-info/${pdata?.sku}`, { state: pdata });
  };

  const history = useNavigate();
  const [color, setColor] = useState('');

  const addToCart = async () => {
    await addItemToCart({
      sku: product?.sku ?? '00001',
      name: product?.name ?? '',
      price: product?.price ?? null,
      discountedPrice: product?.discountedPrice ?? null,
      color: color,
      size: '',
      qty: product?.qty ?? 1,
    });
  };

  return (
    <div className="relative p-6 flex-auto">
      <div className="grid grid-cols-2">
        <img className="" src={pdata?.media[0]?.url ?? ''} />
        <div>
          <br></br>
          <p className="text-[20px]  top-0 left-0 pb-3">{pdata?.name ?? ''}</p>
          <p className="text-[20px]  top-0 left-0 pb-3">{pdata?.formattedPrice ?? ''}</p>
          <p className="text-[15px]  top-0 left-0 pb-3">{`sku: ${pdata?.sku ?? ''}`}</p>
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
              className=" border border-gray-300 w-[60px] h-[30px] text-center"
              value={product?.qty ?? 1}
              onChange={(e) => setProduct({ ...product, qty: e.target.value })}
            ></input>
          </div>
          <div className="bottom-0 pb-3" onClick={async () => {
            await addToCart();
            dispatch({ type: actionTypes.add_cart_item, payload: product });
            closeModal();
          }}>
            <AddtoCart />
          </div>
          <p onClick={() => showId(pdata)} className='underline'>{'View more details'}</p>
        </div>
      </div>
    </div>
  );
};

ProductModal.propTypes = {
  pdata: PropTypes.object,
  closeModal: PropTypes.func,
};

export default ProductModal;
