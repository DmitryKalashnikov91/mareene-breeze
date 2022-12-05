'use client';
import Link from 'next/link';

const MobileMenu = () => {
    const navIcons = [
        { id: 1, title: 'О нас', path: '#' },
        { id: 2, title: 'Бренды', path: '#partners' },
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
                            <Link href={path}>{title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default MobileMenu;
