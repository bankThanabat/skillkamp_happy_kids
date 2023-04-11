import React, { useState } from 'react';
import { ReactComponent as Googleicon } from '../assets/icons/Sticky social icons/googleicon.svg';
import { ReactComponent as Fbicon } from '../assets/icons/Sticky social icons/facebookicon.svg';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/authAPI';
import { useDispatch } from 'react-redux';
import { actionTypes } from '../store/action.type';

const LoginPage = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

  const loginSuccessHandler = (user) => {
    dispatch({ type: actionTypes.set_user, payload: user?.data?.detail });
    localStorage.setItem('token', user?.data?.detail?.Token ?? '');
    localStorage.setItem('name', user?.data?.detail?.Name ?? '');
    history('/home');
  };

  const onLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await login({
        email: email,
        password: password,
      });

      const responseStatus = user?.response?.status;
      switch (responseStatus) {
        case 422:
          setErrorMessage('Invalid email or password');
          break;
        case 401:
          setErrorMessage('Unauthorized (Invalid Credentials)');
          break;
        case 500:
          setErrorMessage('Internal Server Error');
          break;
        case 200:
          loginSuccessHandler(user);
          break;
        default:
          loginSuccessHandler(user);
          break;

        // handle other response status codes here
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="container mx-auto mt-8 flex flex-row min-h-screen justify-center items-center">
        {/* login form */}
        <div className="w-full max-w-sm mx-auto">
          <div>
            <h1
              className="text-center text-5xl text-[#282828] font-display xl:text-5xl
                    xl:text-bold"
            >
              Log In
            </h1>
            <div className="mt-12 text-sm font-display font-semibold text-[#282828] text-center">
              New to this site?
              <a className="cursor-pointer text-[#db6a48] hover:text-gray-700" onClick={() => history('/signup')}>
                {' Sign Up'}
              </a>
            </div>
            <br />
          </div>
          <form className="w-full max-w-sm" onSubmit={(e) => onLogin(e)}>
            <p className="text-[#282828]">Email</p>
            <div className="flex items-center border-b border-[#c4c4c4] py-2 hover:border-[#282828]">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Full name"
              />
            </div>
            <br />
            <p className="text-[#282828]">Password</p>
            <div className="flex items-center border-b border-[#c4c4c4] hover:border-[#282828] py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-label="Full name"
              />
            </div>
            <br />
            <div>
              {errorMessage && <a className="text-[#e74a4a]">{errorMessage ?? ''}</a>}
            </div>
            <br />
            <br />
            <div>
              <a className="text-[#282828] underline">Forgot password?</a>
            </div>
            <br />
            <div className="flex flex-row justify-center items-center">
              <button
                type=''
                className="bg-[#d2461c] hover:bg-[#de7d60] text-[#f6d9d1] hover:text-white font-bold py-2 px-4 rounded-none w-full max-w-sm mx-auto">
                Log In
              </button>
            </div>
          </form>
          <div className="flex items-center py-4">
            <div className="flex-grow h-px bg-gray-400"></div>

            <span className="flex-shrink text-gray-500 px-4 ">
              or log in with
            </span>

            <div className="flex-grow h-px bg-gray-400"></div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="grid justify-end">

              <Fbicon />
            </div>
            <div className="grid justify-start">

              <Googleicon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
