import api from './api';

// {
//   "detail": {
//     "data": {
//       "catalog": {
//         "category": {
//           "numOfProducts": 12,
//           "productsWithMetaData": {
//             "totalCount": 12,
//             "list": [
//               {
//                 "id": "9c50a7f4-7b09-4c3d-f06b-daccbe54a6d5",
//                 "options": [
//                   {
//                     "id": "opt-1",
//                     "key": "Color"
//                   },
//                   {
//                     "id": "a1ccfa58-e41b-743e-b7d7-92a012ea669f",
//                     "key": "Size"
//                   }
//                 ],
//                 "ribbon": "",
//                 "price": 19.99,
//                 "discountedPrice": 19.99,
//                 "sku": "00001",
//                 "isInStock": true,
//                 "urlPart": "i-m-a-product-4",
//                 "formattedDiscountedPrice": "19.99$",
//                 "formattedPrice": "19.99$",
//                 "name": "I'm a product",
//                 "media": [
//                   {
//                     "url": "https://skillkamp-api.com/static/45d10e_11ee24bab35748af871e855fa259b6ab_mv2.jpg",
//                     "index": 0,
//                     "mediaType": "PHOTO",
//                     "altText": null,
//                     "title": "https://skillkamp-api.com/static/45d10e_11ee24bab35748af871e855fa259b6ab_mv2.jpg"
//                   },
//                   {
//                     "url": "https://skillkamp-api.com/static/45d10e_2ba3595c1f554721a850a3bd9133c386_mv2.jpg",
//                     "index": 1,
//                     "mediaType": "PHOTO",
//                     "altText": null,
//                     "title": "https://skillkamp-api.com/static/45d10e_2ba3595c1f554721a850a3bd9133c386_mv2.jpg"
//                   }
//                 ],
//                 "inventory": {
//                   "status": "in_stock",
//                   "quantity": 20
//                 }
//               },
//             ]
//           }
//         }
//       }
//     }
//   }
// }

const getCart = async () => {
  try {
    const cart = await api({
      method: 'get',
      url: '/cart',
    });
    return cart;
  } catch (error) {
    console.log(error);
  }
};

const updateCartItem = async ({
  sku,
  name = '',
  price = null,
  discountedPrice = null,
  color = '',
  size = '',
  qty = null }) => {
  try {
    if (sku) {
      sku = sku.toString().padStart(5, '0');
    }
    const cart = await api({
      method: 'put',
      url: '/cart',
      data: {
        sku,
        name,
        price,
        discountedPrice,
        color,
        size,
        qty,
      },
    });
    return cart;
  } catch (error) {
    console.log(error);
  }
};

const addItemToCart = async ({
  sku,
  name = '',
  price = null,
  discountedPrice = null,
  color = '',
  size = '',
  qty = null }) => {
  try {
    if (sku) {
      sku = sku.toString().padStart(5, '0');
    }
    const cart = await api({
      method: 'post',
      url: '/cart',
      data: {
        sku,
        name,
        price,
        discountedPrice,
        color,
        size,
        qty,
      },
    });
    return cart;
  } catch (error) {
    console.log(error);
  }
};

const removeItemFromCart = async ({
  sku,
  name,
  price,
  discountedPrice,
  color,
  size,
  qty }) => {
  try {
    if (sku) {
      sku = sku.toString().padStart(5, '0');
    }
    const cart = await api({
      method: 'delete',
      url: '/cart',
      data: {
        sku,
        name,
        price,
        discountedPrice,
        color,
        size,
        qty,
      },
    });
    return cart;
  } catch (error) {
    console.log(error);
  }
};

export {
  getCart,
  updateCartItem,
  addItemToCart,
  removeItemFromCart,
};
