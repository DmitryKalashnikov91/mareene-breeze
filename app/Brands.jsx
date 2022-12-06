import Image from 'next/legacy/image';

const Brands = () => {
    const arrBrands = [
        { id: 1, alt: 'Suzuki', path: '/suzuki.png', width: 350, height: 120 },
        { id: 2, alt: 'Mercury', path: '/mercury.png', width: 390, height: 100 },
        { id: 3, alt: 'Yamaha', path: '/yamaha.png', width: 390, height: 100 },
        { id: 4, alt: 'Honda', path: '/honda.png', width: 340, height: 70 },
        { id: 5, alt: 'Tohatsu', path: '/tohatsu.png', width: 380, height: 70 },
        { id: 6, alt: 'BRP', path: '/BRP.png', width: 300, height: 200 },
    ];
    const handleClick = (e) => {
        console.log(e.target);
    };

    return (
        <>
            <div className='brands'>
                <h2 className='sub-title' id='partners'>
                    Наши партнеры:
                </h2>
                <div className='brand-items'>
                    {arrBrands.map(({ id, alt, path, width, height }) => (
                        <div
                            type='button'
                            className='image'
                            key={id}
                            onClick={(e) => handleClick(e)}>
                            <Image alt={alt} src={path} width={width} height={height} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Brands;
