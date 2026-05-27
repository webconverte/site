import type {Metadata} from 'next';
import { Montserrat, Inter } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'WEB CONVERTE | Estratégias Digitais de Alta Performance',
  description: 'Agência de Performance B2B para Área da Saúde e Beleza',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-body text-on-surface bg-background antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
