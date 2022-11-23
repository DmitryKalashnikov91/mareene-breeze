'use client';
import Image from 'next/legacy/image';
import { useRef, useEffect, useState } from 'react';

export default function Page() {
    const [logo, setLogo] = useState(false);
    const [about, setAbout] = useState(false);
    const video = useRef();

    useEffect(() => {
        video.current.playbackRate = 0.7;
        setLogo(true);
    }, []);

    const changeBackground = () => {
        if (window.scrollY >= 1) {
            setLogo(false);
            setAbout(true);
            console.log(about);
        } else {
            setLogo(true);
            setAbout(false);
        }
    };
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', changeBackground);
    }

    return (
        <>
            <section className='intro'>
                <div className='intro__media'>
                    <video src='/volny.mp4' muted preload='auto' autoPlay loop ref={video}></video>
                </div>
                <div className={logo ? 'intro__content active' : 'intro__content'}>
                    <Image src='/logo_marin.png' layout='fill' alt='logo' priority></Image>
                </div>
                <div className={about ? 'intro__about active' : 'intro__about'}>
                    <p className='text-white text-2xl items-center relative text-justify'>
                        <strong>Marine breeze</strong> - дилер подвесных лодочных моторов в России.
                        Даже в это не простое время мы помогаем обновлять мощности нашим клиентам,
                        осуществляя параллельный импорт.
                    </p>
                </div>
            </section>
        </>
    );
}
