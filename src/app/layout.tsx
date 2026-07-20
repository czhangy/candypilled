import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import Footer from '@/components/layout/Footer/Footer';
import Navbar from '@/components/layout/Navbar/Navbar';
import '@/lib/styles/globals.scss';

const jetBrainsMono = JetBrains_Mono({
    variable: '--font-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Candypilled',
    description: 'A Pokémon Nuzlocke helper tool.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={jetBrainsMono.variable}>
            <body>
                <div className="small-screen-message">
                    This site is not available at small screen sizes
                </div>
                <div className="site-shell">
                    <Navbar />
                    <main className="page-main">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
