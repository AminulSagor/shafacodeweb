import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../globals.css';
import { Toaster } from 'react-hot-toast';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/admin/app-sidebar';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Shafacode - Admin Layout',
  description: 'Shafacode - Next Generation Software Development',
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <main className="grow">
            <div className="border-b bg-slate-100 py-4 sticky top-0 z-50">
              <SidebarTrigger className="ml-2" />
            </div>
            <div className="p-4">{children}</div>
            <Toaster />
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
