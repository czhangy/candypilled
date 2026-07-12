import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import '@/lib/styles/globals.scss';

const jetBrainsMono = JetBrains_Mono({
    variable: '--font-mono',
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
        <html lang="en" className={jetBrainsMono.variable}>
            <body>
                <main className="page-main">{children}</main>
            </body>
        </html>
    );
}
