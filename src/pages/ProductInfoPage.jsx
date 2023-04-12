import React, { useRef, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AddtoCart from '../components/buttons/AddtoCart';
import RelatedProduct from '../components/product/RelatedProduct';
import { getProductsBySKU, getProductsNewArrivals } from '../api/productAPI';
import { rgbToTailwindClass } from '../utill/utill';
import { addItemToCart } from '../api/cartAPI';
import Icon from '../components/icon/Icon';
import { IconType } from '../enum/icon.enum';
import { useDispatch } from 'react-redux';

const ProductInfoPage = () => {
  const { sku } = useParams();
  const history = useNavigate();
  const [product, setProduct] = useState(null);
  const inputReference = useRef(null);
  const [showRefund, setShowRefund] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [relatedProduct, setRelatedProduct] = useState([]);
  const dispatch = useDispatch();

  const refundToggle = () => {
    setShowRefund(!showRefund);
  };

  const infoToggle = () => {
    setShowInfo(!showInfo);
  };
  useEffect(() => {
    inputReference.current.focus();
  }, []);

  const fetchProductBySku = async () => {
    try {
      if (sku) {
        const response = await getProductsBySKU({ sku });
        const respProduct = response?.data?.detail?.data?.catalog?.product;
        setProduct({
          ...respProduct,
          qty: 1,
          color: respProduct?.options[0]?.selections[0]?.key,
          size: respProduct?.options[1]?.selections[0]?.value,
        } ?? []);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNewArraivalProducts = async () => {
    const response = await getProductsNewArrivals();
    setRelatedProduct(response?.data?.detail?.data?.catalog?.category?.productsWithMetaData?.list ?? []);
  };

  const onSelectColor = (color) => {
    setProduct({ ...product, color: color });
  };

  const onSelectSize = (size) => {
    setProduct({ ...product, size: size });
  };

  const onAddToCart = async () => {
    try {
      await addItemToCart({
        sku: product?.sku,
        name: product?.name,
        price: product?.price,
        discountedPrice: product?.discountedPrice,
        color: product?.color,
        size: product?.size,
        qty: product?.qty,
        ...product,
      });
      dispatch({ type: actionTypes.add_cart_item });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductBySku();
    fetchNewArraivalProducts();
  }, []);

  return (
    <div className="flex flex-col mx-[20vw] mt-8" ref={inputReference}>
      <div className='flex justify-start'>
        <p className="text-gray-700 text-2xl ">{''}</p>
      </div>
      <div className='grid grid-cols-2 my-20 gap-4'>
        <div>
          <img
            src={product?.media && (product?.media[0]?.fullUrl ?? '')}
            className=""
          />
          <p className="text-sm font-light">{product?.description ?? ''}</p>
        </div>
        <div className='flex flex-col gap-6'>
          <h1 className="text-3xl text-neutral-700">{product?.name}</h1>
          <p className='text-lg  font-thin text-neutral-600'>SKU :{product?.sku}</p>
          <div className="text-neutral-600">{product?.formattedPrice ?? ''}</div>
          <div>
            <p className="text-neutral-600">Color:</p>
            {product &&
              <div className='flex flex-row gap-3 my-3'>
                {product?.options[0]?.selections.map((option, i) => (
                  <div
                    key={i}
                    onClick={() => onSelectColor(option?.key ?? '')}
                    className={`w-6 h-6 rounded-full border-2 border-black ${rgbToTailwindClass(option?.value ?? '')}`}></div>
                ))}
              </div>
            }
          </div>
          <div className='flex flex-col gap-2'>
            <p className="text-neutral-600">Size</p>
            {product &&
              <select className="block py-2  w-full border bg-white ring-black ">
                {product?.options[1]?.selections.map((option, i) => (
                  <option
                    className='rounded-none hover:bg-neutral-600'
                    key={i}
                    value={option?.value}
                    onChange={() => onSelectSize(option?.key ?? '')}
                  >
                    {option?.key ?? ''}
                  </option>

                ))}
              </select>

            }


          </div>
          <div className='flex flex-col gap-2'>
            <p className="text-neutral-600">Quantity</p>
            <input
              type='number' className='px-2 py-3 border focus:ring-0 w-1/5'
              value={product?.qty ?? 1}
              onChange={(e) => setProduct({ ...product, qty: e.target.value })}
            />
          </div>
          <div className='gap-1 flex flex-col'>
            <div className='flex flex-row gap-2'>
              <div
                className='w-[90%]'
                onClick={async () => {
                  await onAddToCart();
                  history('/home');
                }}
              ><AddtoCart IsDarkMode={true} />
              </div>
              <div className='flex bg-white border-red-500 border w-[10%] justify-center items-center' ><Icon type={IconType.heartOutline} className={'text-red-500 text-2xl'} /></div>
            </div>
            <button
              onClick={async () => {
                await onAddToCart();
                history('/shopping-cart');
              }}
              className='w-full py-2 text-white font-light text-center bg-[#D2461C]'>Buy Now</button>
          </div>
          <div className='flex flex-col gap-2 text-gray-700'>
            <div>
              <div className='flex justify-between items-center' >
                <h4 className=" font-light text-lg ">Product Info</h4>
                <div onClick={infoToggle} className='cursor-pointer'>
                  {showInfo ? <Icon type={IconType.minus} className={'text-xl'} /> : <Icon type={IconType.plus} className={'text-xl'} />}
                </div>
              </div>
              {showInfo && (<p className="font-light  text-5l ">{`I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.`}</p>)}
            </div>
            <hr className='h-px border-none bg-gray-700 ' />
            <div>
              <div className='flex justify-between items-center' >
                <h4 className=" font-light text-lg ">RETURN AND REFUND POLICY</h4>
                <div onClick={refundToggle} className='cursor-pointer'>
                  {showRefund ? <Icon type={IconType.minus} className={'text-xl'} /> : <Icon type={IconType.plus} className={'text-xl'} />}
                </div>
              </div>

              {showRefund && (<p className="font-light text-5l ">{`I’m a return and refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.`}</p>)}
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center w-full'>
        <h2 className='text-center text-3xl w-full'>Related Product</h2>
        <RelatedProduct className='flex my-20' products={relatedProduct} />
      </div>
    </div>


  );
};

export default ProductInfoPage;
