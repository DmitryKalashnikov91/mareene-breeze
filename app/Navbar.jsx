'use client';
// import Link from 'next/link';
import { Link } from 'react-scroll';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleState } from './redux/slices/menuSlice';
import MobileMenu from './MobileMenu';

const Navbar = ({}) => {
    const menu = useSelector((state) => state.menu.value);
    const linksRef = React.useRef(null);
    const dispatch = useDispatch();
    const navigation = [
        { id: 1, title: 'О нас', path: 'about' },
        { id: 2, title: 'Бренды', path: 'partners' },
        { id: 3, title: 'Запчасти', path: 'parts' },
        { id: 4, title: 'Доставка', path: 'delivery' },
        { id: 5, title: 'Контакты', path: 'contacts' },
    ];
    return (
        <nav className='navigate'>
            {!menu ? (
                <div className='nav-links' ref={linksRef}>
                    <ul>
                        {navigation.map(({ id, title, path }) => (
                            <li key={id}>
                                <Link activeClass='nav-active' spy={true} smooth={true} to={path}>
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <MobileMenu />
            )}
            <div className='burger-btn' onClick={() => dispatch(toggleState())}>
                {menu ? 'Скрыть' : 'Меню'}
            </div>
        </nav>
    );
};

export default Navbar;
