'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Become a Partner', href: '/affiliate' },
  { label: 'Blog', href: '/blogs' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isAdmin, setIsAdmin] = useState(false);
  const [open, setOpen] = useState(false);

  // Check localStorage for admin_auth (client only)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const storedUser = localStorage.getItem('admin_auth');
    setIsAdmin(!!storedUser);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo/logo.png"
            alt="ShafaCode Logo"
            width={48}
            height={48}
            className="h-12 w-auto object-contain"
          />
          <span className="text-lg font-semibold text-white leading-none">
            ShafaCode
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden flex-1 items-center justify-center md:flex">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {navLinks.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname === item.href || pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'rounded-md px-1.5 py-1 text-slate-300 transition-colors hover:text-sky-400',
                      isActive && 'text-sky-400 '
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}

            {isAdmin && (
              <li>
                <Link
                  href="/admin/dashboard"
                  className={cn(
                    'rounded-md px-1.5 py-1 text-slate-300 transition-colors hover:text-sky-400',
                    pathname.startsWith('/admin') && 'text-sky-400'
                  )}
                >
                  Admin
                </Link>
              </li>
            )}
          </ul>
        </nav>

        {/* Desktop contact */}
        <div className="hidden items-center gap-2 whitespace-nowrap text-sm md:flex">
          <span className="font-medium text-slate-300">Call Us:</span>
          <Link
            href="tel:+8801540233587"
            className="font-semibold text-sky-400 hover:text-sky-500"
          >
            +8801540233587
          </Link>
        </div>

        {/* Mobile menu */}
        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 hover:cursor-pointer border-slate-700 bg-transparent text-slate-100 hover:bg-slate-800 hover:text-slate-50"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 border-slate-800 bg-slate-950 text-slate-100 [&>button]:hidden"
            >
              <SheetHeader>
                <SheetTitle>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/logo/logo.png"
                        alt="ShafaCode Logo"
                        width={32}
                        height={32}
                        className="h-8 w-auto object-contain"
                      />
                      <span className="text-base font-semibold text-muted">
                        ShafaCode
                      </span>
                    </div>
                    <SheetClose asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 hover:cursor-pointer border-slate-700 bg-transparent text-slate-100 hover:bg-slate-800 hover:text-slate-50"
                        aria-label="Open menu"
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetClose>
                  </div>
                </SheetTitle>

                <div className=" flex flex-col gap-4">
                  <nav className="mt-4">
                    <ul className="flex flex-col gap-1 text-sm font-medium">
                      {navLinks.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={cn(
                              'block rounded-md px-3 py-2 text-slate-200 hover:bg-slate-900 hover:text-sky-400'
                            )}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}

                      {isAdmin && (
                        <li>
                          <Link
                            href="/admin/dashboard"
                            onClick={() => setOpen(false)}
                            className="block rounded-md px-3 py-2 text-slate-200 hover:bg-slate-900 hover:text-sky-400"
                          >
                            Admin
                          </Link>
                        </li>
                      )}
                    </ul>
                  </nav>

                  <div className="border-t border-slate-800 pt-4 text-sm px-2">
                    <p className="text-slate-300 font-medium mb-2">Call Us:</p>
                    <Link
                      href="tel:+8801540233587"
                      className="font-semibold text-sky-400 hover:text-sky-500"
                      onClick={() => setOpen(false)}
                    >
                      +8801540233587
                    </Link>
                  </div>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
