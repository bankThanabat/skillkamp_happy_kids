/* eslint-disable indent */
import React from 'react';
import { ReactComponent as FbLogo } from '../assets/icons/social icons/facebook-svgrepo-com.svg';
import { ReactComponent as PrLogo } from '../assets/icons/social icons/pinterest-svgrepo-com.svg';
import { ReactComponent as IgLogo } from '../assets/icons/social icons/instagram-svgrepo-com.svg';
import { Outlet, Link } from 'react-router-dom';

const Footer = () => {
    const fMenu = [{
        id: 0,
        name: 'Home',
        path: '/',
        isActive: true,
    },
    {
        id: 1,
        name: 'Shop Collection',
        path: '/',
        isActive: true,
    }, {
        id: 2,
        name: 'Our Story',
        path: '/ourstory',
        isActive: true,
    }, {
        id: 3,
        name: 'Contact',
        path: '/',
        isActive: true,
    }, {
        id: 4,
        name: 'Shipping&Return',
        path: '/',
        isActive: true,
    }, {
        id: 5,
        name: 'Store Policy',
        path: '/',
        isActive: true,
    }, {
        id: 6,
        name: 'Payment Methods',
        path: '/',
        isActive: true,
    }, {
        id: 7,
        name: 'FAQ',
        path: '/',
        isActive: true,
    },
    ];
    return (
        <div className="Footer">
            <Outlet />
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="w-full h-[20vh] bg-white flex justify-center items-center">
                <h1 className="text-7xl font-patrick-hand"><Link to="/"> {'happy kids'} </Link></h1>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <div className="grid grid-rows-4 grid-flow-col gap-4 justify-end">
                    {fMenu.filter((e, id) => e.isActive && id <= 3).map((e) => <p key={e.id} className="text-xl font-patrick-hand font-light"><Link to={e.path}> {e.name} </Link></p>)}
                </div>
                <div className='grid grid-cols-3 gap-4 '>
                    <div className='grid justify-end'><FbLogo className='w-[40px] h-[40px]' /></div>
                    <div className='grid justify-center'><PrLogo className='w-[40px] h-[40px]' /></div>
                    <div className='grid justify-start'><IgLogo className='w-[40px] h-[40px]' /></div>
                </div>
                <div className="grid grid-rows-4 grid-flow-col gap-4 justify-start">
                    {fMenu.filter((e, id) => e.isActive && id >= 4).map((e) => <p key={e.id} className="text-xl font-patrick-hand font-light"><Link to={e.path}> {e.name} </Link></p>)}
                </div>
            </div>
            <div className="w-full h-[8vh] bg-white flex justify-center items-center">
                <h2 className="text-4xl font-patrick-hand">{'Join Our Mailing List'}</h2>
            </div>
            <div className='flex flex-row justify-center align-middle items-center gap-x-4'>
                <div className="mt-2.5">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset hover:ring-zinc-500 focus:ring-zinc-500 sm:text-sm sm:leading-6"
                    />
                </div>
                <button
                    type="submit"
                    className="flex justify-center items-center mt-2.5 rounded-md w-40 h-10 bg-amber-950 text-center text-sm font-semibold text-white shadow-sm hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-950"
                >
                    Subscribe Now
                </button>
            </div>
            <div className="flex justify-center items-center mt-14">© 2035 by happy kids. Powered and secured by Wix</div>
        </div>
    );
};

export default Footer;
