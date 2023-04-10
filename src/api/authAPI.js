import api from './api';

const signup = async ({ fullname, email, password }) => {
  try {
    const response = await api({
      method: 'post',
      url: '/auth/signup',
      data: {
        fullname,
        email,
        password,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const login = async ({ email, password }) => {
  try {
    const response = await api({
      method: 'post',
      url: '/auth/login',
      data: {
        email,
        password,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export {
  signup,
  login,
};
