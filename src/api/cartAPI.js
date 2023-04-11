import api from './api';

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
  qty = 0 }) => {
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
