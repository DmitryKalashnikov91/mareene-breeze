import './styles/globals.css';
import Navbar from './Navbar';

export default function RootLayout({ children }) {
    return (
        <html>
            <head />
            <body>
                <header>
                    <Navbar />
                </header>
                {children}
            </body>
        </html>
    );
}
