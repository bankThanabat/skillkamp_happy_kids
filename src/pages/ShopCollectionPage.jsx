import React from 'react';
import ProductCollection from '../components/product/ProductCollection';
export const DataproductCollection = [
  {
    id: 0,
    name: 'ProductCollection1',
    price: 100,
    isActive: true,
  },
  {
    id: 1,
    name: 'ProductCollection2',
    price: 100,
    isActive: true,
  },
  {
    id: 2,
    name: 'ProductCollection3',
    price: 100,
    path: '/',
    isActive: true,
  },
  {
    id: 3,
    name: 'pProductCollection4',
    price: 100,
    isActive: true,
  },
  {
    id: 4,
    name: 'ProductCollection5',
    price: 100,
    isActive: true,
  },
  {
    id: 5,
    name: 'ProductCollection6',
    price: 100,
    isActive: true,
  },
  {
    id: 6,
    name: 'ProductCollection7',
    price: 100,
    isActive: true,
  },
  {
    id: 7,
    name: 'ProductCollection8',
    price: 100,
    isActive: true,
  },
];

const ShopCollection = () => {
  return (
    <div>
      <p className="text-center font-patrick-hand mx-[28vw] text-[30px]">
        ShopCollection
      </p>
      <div className="grid-container grid grid-cols-11">
        <div className="col-span-2">
          <p className="left-1 text-[30px]">Filter by</p>

        </div>
        <div className="col-span-9">
          <div className="grid grid-cols-3">
            {DataproductCollection.filter((e) => e.isActive).map((e) => (
              <ProductCollection key={e.id} dat={e} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCollection;
