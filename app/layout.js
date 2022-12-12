'use client';
import './styles/globals.scss';
import Navbar from './Navbar';
import React from 'react';

import { store } from './redux/store';
import { Provider } from 'react-redux';

export default function RootLayout({ children }) {
    return (
        <html>
            <head />
            <body>
                <Provider store={store}>
                    <header>
                        <Navbar />
                    </header>
                    {children}
                </Provider>
            </body>
        </html>
    );
}
