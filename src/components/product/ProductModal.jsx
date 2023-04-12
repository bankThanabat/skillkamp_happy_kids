import React, { useState, useEffect } from 'react';
import AddtoCart from '../buttons/AddtoCart';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { actionTypes } from '../../store/action.type';
import { addItemToCart } from '../../api/cartAPI';
import { getProductsBySKU } from '../../api/productAPI';
import Icon from '../icon/Icon';
import { IconType } from '../../enum/icon.enum';

const ProductModal = ({ pdata, closeModal }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const history = useNavigate();
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  const showId = (pdata) => {
    history(`/product-info/${pdata?.sku}`, { state: pdata });
  };

  const fetchProductBySku = async () => {
    if (!pdata?.sku) return;
    try {
      const fetchedProduct = await getProductsBySKU({ sku: pdata?.sku ?? '' });
      setProduct(fetchedProduct?.data?.detail?.data?.catalog?.product ?? {});
    } catch (error) {
      console.log(error);
    }
  };


  const addToCart = async () => {
    await addItemToCart({
      sku: product?.sku,
      name: product?.name ?? '',
      price: product?.price ?? null,
      discountedPrice: product?.discountedPrice ?? null,
      color: color,
      size: size,
      qty: product?.qty ?? 1,
    });
    dispatch({ type: actionTypes.add_cart_item });
  };

  useEffect(() => {
    fetchProductBySku();
  }, []);

  useEffect(() => {
    if (product?.options && product?.options[0]) {
      setColor(product?.options[0]?.selections[0]?.key ?? '');
      setSize(product?.options[1]?.selections[0]?.value ?? '');
    }
  }, [product]);

  return (
    <div className="relative p-6 flex-auto">
      <Icon type={IconType.minus} onClick={closeModal} className='absolute top-0 right-5 z-20' />
      <div className="grid grid-cols-2">
        <img className="" src={product?.media && (product?.media[0]?.fullUrl ?? '')} />
        <div>
          <br></br>
          <p className="text-[20px]  top-0 left-0 pb-3">{product?.name ?? ''}</p>
          <p className="text-[20px]  top-0 left-0 pb-3">{product?.formattedPrice ?? ''}</p>
          <p className="text-[15px]  top-0 left-0 pb-3">{`sku: ${product?.sku ?? ''}`}</p>
          <p className="w-full text-[15px]  top-0 left-0 pb-3">
            Color : {color}{' '}
          </p>
          <div className="pb-3 mr-2">
            {product?.options && product?.options[0]?.selections && product?.options[0]?.selections.map((item, index) => (
              <div key={index}>
                <input
                  type="radio"
                  className=""
                  name={item?.key ?? ''}
                  onClick={() => setColor(item?.key ?? '')}
                />
                <label className=""> {item?.description ?? ''}</label>
              </div>
            ))}
          </div>
          <p className="text-[15px]  top-0 left-0 pb-3">Size</p>
          <div className="pb-3">
            <select
              name={product?.options && (product?.options[1]?.key ?? '') || ''}
              id="size"
              className=" border border-gray-300 w-full h-[40px]"
              onChange={(e) => setSize(e.target.value)}
            >
              {product?.options && product?.options[1]?.selections && product?.options[1]?.selections.map((item, index) => (
                <option key={index} value={item?.value ?? ''}>{item?.description ?? ''}</option>

              ))}
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
            dispatch({
              type: actionTypes.add_cart_item, payload: {
                ...product,
                color: color,
                size: size,
              },
            });
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
