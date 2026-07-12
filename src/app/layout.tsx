import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/lib/styles/globals.scss';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Candypilled',
    description: 'A Pokemon Nuzlocke helper tool.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable}`}
        >
            <body>
                <main className="page-main">{children}</main>
            </body>
        </html>
    );
}
