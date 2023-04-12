/* eslint-disable indent */
import React from 'react';
import { ReactComponent as FbLogo } from '../assets/icons/social icons/facebook-svgrepo-com.svg';
import { ReactComponent as PrLogo } from '../assets/icons/social icons/pinterest-svgrepo-com.svg';
import { ReactComponent as IgLogo } from '../assets/icons/social icons/instagram-svgrepo-com.svg';
import { Outlet, Link, useNavigate } from 'react-router-dom';

const Footer = () => {
    const history = useNavigate();
    const fMenu = [{
        id: 0,
        name: 'Home',
        path: '/',
        isActive: true,
    },
    {
        id: 1,
        name: 'Shop Collection',
        path: '/shopcollection',
        isActive: true,
    }, {
        id: 2,
        name: 'Our Story',
        path: '/ourstory',
        isActive: true,
    }, {
        id: 3,
        name: 'Contact',
        path: '/contact',
        isActive: true,
    }, {
        id: 4,
        name: 'Shipping&Return',
        path: '/shipping',
        isActive: true,
    }, {
        id: 5,
        name: 'Store Policy',
        path: '/storepolicy',
        content: 0,
        isActive: true,
    }, {
        id: 6,
        name: 'Payment Methods',
        path: '/paymentmethod',
        content: 1,
        isActive: true,
    }, {
        id: 7,
        name: 'FAQ',
        path: '/faq',
        isActive: true,
    },
    ];
    const navigateTo = (path, content) => {
        history(path, { state: content });
    };

    return (
        <div className="Footer">
            <Outlet />
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="w-full bg-white flex justify-center items-center">
                <h1 className="text-3xl font-patrick-hand">
                    <Link to="/"> {'happy kids'} </Link>
                </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 pt-10 max-w-screen-lg mx-auto'>
                <div className="flex flex-col gap-2 text-center font-light">
                    {fMenu.filter((e, id) => e.isActive && id <= 3).map((e) => <p key={e.id} className="font-patrick-hand"><Link to={e.path}> {e.name} </Link></p>)}
                </div>
                <div className='flex justify-center item-center gap-8'>
                    <div className='grid justify-end'><FbLogo className='w-[20px] h-[20px]' /></div>
                    <div className='grid justify-center'><PrLogo className='w-[20px] h-[20px]' /></div>
                    <div className='grid justify-start'><IgLogo className='w-[20px] h-[20px]' /></div>
                </div>
                <div className="flex flex-col gap-2 text-center font-light">
                    {fMenu.filter((e, id) => e.isActive && id >= 4).map((e) => <p key={e.id} className="font-patrick-hand" onClick={() => navigateTo(e.path, e.content)}> {e.name} </p>)}
                </div>
            </div>
            <div className="w-full md:h-[8vh] bg-white flex justify-center items-center">
                <h2 className="text-2xl font-patrick-hand font-light">{'Join Our Mailing List'}</h2>
            </div>
            <div className='flex flex-col md:flex-row justify-center align-middle items-center gap-x-4 w-full max-w-screen-lg mx-auto'>
                <div className="mt-2.5 md:mt-0">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email here*"
                        autoComplete="email"
                        className="block w-full md:w-[250px] border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset hover:ring-zinc-500 focus:ring-zinc-500 sm:text-sm sm:leading-6"
                    />
                </div>
                <button
                    type="submit"
                    className="flex justify-center items-center mt-2.5 md:mt-0 bg-primary-main1 text-center text-sm text-white shadow-sm hover:bg-[#D2461C] transition ease-in-out duration-150 py-2 px-3"
                >
                    Subscribe Now
                </button>
            </div>
            <div className="flex justify-center items-center mt-14 text-center md:text-left">© 2035 by happy kids. Powered and secured by thanabat</div>
        </div>

    );
};

export default Footer;
