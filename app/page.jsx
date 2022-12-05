'use client';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/legacy/image';
import Brands from './Brands';
import About from './About';

export default function App() {
    const [scrollY, setScrollY] = React.useState();

    const menu = useSelector((state) => state.menu.value);

    const videoRef = React.useRef(null);

    useEffect(() => {
        videoRef.current.playbackRate = 0.7; // video speed

        window.addEventListener('scroll', () => {
            setScrollY(window.scrollY);
        });
    }, []);

    return (
        <>
            <section className='intro'>
                <div className='intro__media'>
                    <video
                        src='/volny.mp4'
                        muted
                        preload='auto'
                        autoPlay
                        loop
                        ref={videoRef}
                        poster='/poster.png'></video>
                </div>
                <div className='intro__content'>
                    {(scrollY < 1) & !menu ? (
                        <div className='img'>
                            <Image src='/logo_marin.png' layout='fill' alt='logo' priority></Image>
                        </div>
                    ) : (
                        <div className={(scrollY < 200) & !menu ? 'about active' : 'about'}>
                            <p>
                                <strong>Marine breeze</strong> - дилер подвесных лодочных моторов в
                                России. Даже в это не простое время мы помогаем обновлять мощности
                                нашим клиентам, осуществляя параллельный импорт.
                            </p>
                        </div>
                    )}
                </div>
            </section>
            <Brands />
            <About />
        </>
    );
}
