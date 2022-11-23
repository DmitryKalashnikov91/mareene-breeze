const Navbar = () => {
    return (
        <div className='intro__navigate'>
            <nav>
                <ul className='flex gap-10 text-white text-xl'>
                    <li>
                        <a href='#'>О нас</a>
                    </li>
                    <li>
                        <a href='#'>Доставка</a>
                    </li>
                    <li>
                        <a href='#'>Контакты</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
