'use client';
import { useDispatch } from 'react-redux';
import { Link } from 'react-scroll';
import { toggleState } from './redux/slices/menuSlice';

const MobileMenu = () => {
    const dispatch = useDispatch();
    const navIcons = [
        { id: 1, title: 'О нас', path: 'about' },
        { id: 2, title: 'Бренды', path: 'partners' },
        { id: 3, title: 'Запчасти', path: '#' },
        { id: 4, title: 'Доставка', path: '#' },
        { id: 5, title: 'Контакты', path: '#' },
    ];

    return (
        <>
            <nav className='mobile-menu'>
                <ul>
                    {navIcons.map(({ id, title, path }) => (
                        <li key={id}>
                            <Link
                                activeClass='nav-active'
                                spy={true}
                                smooth={true}
                                to={path}
                                onClick={() => dispatch(toggleState())}>
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default MobileMenu;
