import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from './client-layout';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata = {
  title: 'BMI Calculator',
  description:
    'Calculate your Body Mass Index (BMI) with our easy-to-use calculator. Get instant results and understand your body composition better with this simple yet effective BMI measurement tool.',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ClientLayout>
          <main className="block w-full relative">{children}</main>
        </ClientLayout>
      </body>
    </html>
  );
}
