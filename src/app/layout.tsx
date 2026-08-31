import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import AuthProvider from '@/components/AuthProvider/AuthProvider';
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
                <AuthProvider>
                    <div className="site-shell">
                        <Navbar />
                        <main className="page-main">{children}</main>
                        <Footer />
                    </div>
                </AuthProvider>
            </body>
        </html>
    );
}
