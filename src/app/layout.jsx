import { Public_Sans } from 'next/font/google';
import './globals.css';
import ClientLayout from './client-layout';
import { SidebarProvider } from '@/components/ui/sidebar';

const publicSans = Public_Sans({
  variable: '--font-public-sans',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Personal Finance Calculator',
  description:
    'Track your personal finances with our comprehensive calculator. Monitor expenses, income, and savings goals with this intuitive financial management tool.',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${publicSans.className} antialiased`}>
        <ClientLayout>
          <SidebarProvider>
            <main className="block w-full relative bg-beige-100">
              {children}
            </main>
          </SidebarProvider>
        </ClientLayout>
      </body>
    </html>
  );
}
