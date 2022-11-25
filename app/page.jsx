'use client';

import React, { useEffect } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import Image from 'next/legacy/image';
import Brands from './Brands';

export default function App() {
    // state dep scroll
    const [state, setState] = React.useState(false);

    const logoRef = React.useRef(null);
    const aboutRef = React.useRef(null);
    const videoRef = React.useRef(null);
    const nodeRef = state ? logoRef : aboutRef;

    useEffect(() => {
        videoRef.current.playbackRate = 0.7; // video speed
        setState(true);
    }, []);

    // content dep state
    const changeContent = () => {
        if (window.scrollY >= 0.7) {
            setState(false);
        } else {
            setState(true);
        }
    };

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', changeContent); // scroll head
    }

    return (
        <>
            <section className='intro'>
                <div className='intro__media'>
                    <video
                        src='/videoBg.mp4'
                        muted
                        preload='auto'
                        autoPlay
                        loop
                        ref={videoRef}
                        poster='/poster.png'></video>
                </div>

                <SwitchTransition>
                    <CSSTransition in={state} timeout={1000} key={state} classNames='fade'>
                        <div ref={nodeRef}>
                            {state ? (
                                <div className='intro__content img'>
                                    <h1>
                                        <Image
                                            src='/logo_marin.png'
                                            className='img'
                                            layout='fill'
                                            alt='logo'
                                            priority></Image>
                                    </h1>
                                </div>
                            ) : (
                                <div
                                    className='.intro__content about mt-96 flex-row w-full'
                                    ref={aboutRef}>
                                    <p className='text-white relative text-3xl pt-40 px-24'>
                                        <strong>Marine breeze</strong> - дилер подвесных лодочных
                                        моторов в России. Даже в это не простое время мы помогаем
                                        обновлять мощности нашим клиентам, осуществляя параллельный
                                        импорт.
                                    </p>
                                </div>
                            )}
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </section>
            <Brands />
        </>
    );
}
