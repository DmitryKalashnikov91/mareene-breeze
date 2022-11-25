'use client';
import Link from 'next/link';
import React from 'react';
import MobileMenu from './MobileMenu';

const Navbar = ({}) => {
    const [active, setActive] = React.useState(false);
    const linksRef = React.useRef(null);
    const navigation = [
        { id: 1, title: 'О нас', path: '#' },
        { id: 2, title: 'Бренды', path: '#partners' },
        { id: 3, title: 'Запчасти', path: '#' },
        { id: 4, title: 'Доставка', path: '#' },
        { id: 5, title: 'Контакты', path: '#' },
    ];
    return (
        <nav className='intro__navigate'>
            {!active ? (
                <div className='nav-links' ref={linksRef}>
                    <ul>
                        {navigation.map(({ id, title, path }) => (
                            <li key={id}>
                                <Link href={path}>{title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <MobileMenu />
            )}
            <div className='burger-btn' onClick={() => setActive(!active)}>
                Меню
            </div>
        </nav>
    );
};

export default Navbar;
