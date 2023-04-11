import api from './api';

const getFilter = async () => {
  try {
    const filter = await api({
      method: 'get',
      url: '/filters/',
    });
    return filter;
  } catch (error) {
    console.log(error);
  }
};

export {
  getFilter,
};
