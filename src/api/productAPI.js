import api from './api';

const getProducts = async () => {
  try {
    const response = await api({
      method: 'get',
      url: '/products/',
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getProductsNewArrivals = async () => {
  try {
    const response = await api({
      method: 'get',
      url: '/products/new_arrivals',
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};


export {
  getProducts,
  getProductsNewArrivals,
};
