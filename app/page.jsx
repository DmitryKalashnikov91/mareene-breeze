'use client';
import React, { useEffect } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { useSelector } from 'react-redux';
import Image from 'next/legacy/image';
import Brands from './Brands';

export default function App() {
    // state dep scroll
    const [showLogo, setShowLogo] = React.useState(false);
    const [showAbout, setShowAbout] = React.useState(false);

    const [scrollY, setScrollY] = React.useState(0);

    const menu = useSelector((state) => state.menu.value);
    const logoRef = React.useRef(null);
    const aboutRef = React.useRef(null);
    const videoRef = React.useRef(null);
    const nodeRef = React.useRef(null);

    useEffect(() => {
        videoRef.current.playbackRate = 0.7; // video speed
        setShowLogo(true);
        setShowAbout(false);
        window.addEventListener('scroll', () => {
            // document.body.style.cssText = `--scrollTop: ${window.scrollY}px`;
            setScrollY(window.scrollY);
        });
    }, []);
    useEffect(() => {
        setShowLogo(() => !showLogo);
        setShowAbout(false);
    }, [menu]);
    // content dep state
    const changeContent = () => {
        if (scrollY > 1 || menu) {
            setShowLogo(false);
            setShowAbout(true);
        } else if (scrollY < 200) {
            setShowAbout(false);
        } else {
            setShowLogo(true);
        }
        return;
    };

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', changeContent); // scroll head
    }
    console.log(menu);

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

                {/* <SwitchTransition>
                    <CSSTransition in={state} timeout={1000} key={state} classNames='fade'> */}

                <div className='intro__content'>
                    <CSSTransition in={showLogo} nodeRef={nodeRef} timeout={1000} classNames='logo'>
                        {(scrollY < 1) & !menu ? (
                            <div className='img' ref={nodeRef}>
                                <Image
                                    src='/logo_marin.png'
                                    layout='fill'
                                    alt='logo'
                                    priority></Image>
                            </div>
                        ) : (
                            <div
                                className={(scrollY < 200) & !menu ? 'about active' : 'about'}
                                ref={aboutRef}>
                                <p>
                                    <strong>Marine breeze</strong> - дилер подвесных лодочных
                                    моторов в России. Даже в это не простое время мы помогаем
                                    обновлять мощности нашим клиентам, осуществляя параллельный
                                    импорт.
                                </p>
                            </div>
                        )}
                    </CSSTransition>
                </div>
                {/* </CSSTransition>
                </SwitchTransition> */}
            </section>
            <Brands />
        </>
    );
}
