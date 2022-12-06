import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ArrowUp = () => {
    const [scrollTop, setScrollTop] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 250) {
                setScrollTop(true);
            } else {
                setScrollTop(false);
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            {scrollTop ? (
                <button className='arrow-up' onClick={scrollUp}>
                    <Image src='/arrow-up.svg' alt='up' width={25} height={30} />
                </button>
            ) : null}
        </>
    );
};

export default ArrowUp;
