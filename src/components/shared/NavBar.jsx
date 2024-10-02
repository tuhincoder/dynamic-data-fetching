import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    const navItem = [
        {
            title: 'Posts',
            path: '/posts'
        },
        {
            title: 'Meals',
            path: '/meals'
        },
    ]
    return (
        <div className='bg-gray-900 p-5 text-white flex justify-between px-10'>
            <h1 className='text-2xl text-fuchsia-600'>Dynamic</h1>
            <div className='space-x-4 '>
                {
                    navItem.map(item => <Link className='text-xl' key={item.path} href={item.path}>{item.title}</Link>)
                }
            </div>
        </div>
    );
};

export default NavBar;