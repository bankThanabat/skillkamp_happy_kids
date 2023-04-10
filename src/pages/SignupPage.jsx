import React, { useState } from 'react';
import { ReactComponent as Googleicon } from '../assets/icons/Sticky social icons/googleicon.svg';
import { ReactComponent as Fbicon } from '../assets/icons/Sticky social icons/facebookicon.svg';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api/authAPI';
const SignupPage = () => {
  const history = useNavigate();
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const onSignup = async (event) => {
    event.preventDefault();
    try {
      const user = await signup({
        fullname: fullname,
        email: email,
        password: password,
      });

      const responseStatus = user?.response?.status;
      switch (responseStatus) {
        case 201:
          setErrorMessage('');
          setSuccessMessage('Create User Successful');
          setTimeout(() => {
            history('/');
          }, 1200);
          break;

        case 200:
          setErrorMessage('User already exists');
          break;

        case 422:
          setErrorMessage('validation error, encountered sending invalid data');
          break;

        default:
          setErrorMessage('User already exists');
          break;
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
              Sign Up
            </h1>
            <div className="mt-12 text-sm font-display font-semibold text-[#282828] text-center">
              Already a member?
              <a
                className="cursor-pointer text-[#db6a48] hover:text-gray-700"
                onClick={() => history('/login')}
              >
                {' Log In'}
              </a>
            </div>
            <br />
          </div>
          <form className="w-full max-w-sm" onSubmit={(e) => onSignup(e)}>
            <p className="text-[#282828]">Fullname</p>
            <div className="flex items-center border-b mb-6 border-[#c4c4c4] py-2 hover:border-[#282828]">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder=""
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                aria-label="Full name"
              />
            </div>
            <p className="text-[#282828]">Email</p>
            <div className="flex items-center border-b border-[#c4c4c4] py-2 hover:border-[#282828]">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                aria-label="Email"
              />
            </div>
            <br />
            <p className="text-[#282828]">Password</p>
            <div className="flex items-center border-b border-[#c4c4c4] hover:border-[#282828] py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=""
                aria-label="Password"
              />
            </div>

            <br />
            {errorMessage && <a className="text-[#e74a4a]">{errorMessage ?? ''}</a>}
            {successMessage && <a className="text-[#4ae7ad]">{setSuccessMessage ?? ''}</a>}
            <br />
            <br />
            <div className="flex flex-row justify-center items-center">
              <button
                type='submit'
                className="bg-[#c4c4c4] hover:bg-[#d2471e] text-white font-bold py-2 px-4 rounded-none w-full max-w-sm mx-auto">
                Sign Up
              </button>
            </div>
          </form>
          <div className="flex items-center py-4">
            <div className="flex-grow h-px bg-gray-400"></div>

            <span className="flex-shrink text-gray-500 px-4 ">
              or sign up with
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

export default SignupPage;
