'use client';
import { Calendar, Home, Inbox } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const items = [
  {
    title: 'Dashboard',
    url: '/admin/dashboard',
    icon: Home,
  },
  {
    title: 'Projects',
    url: '/admin/projects',
    icon: Inbox,
  },
  {
    title: 'Blogs',
    url: '/admin/blogs',
    icon: Calendar,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className="bg-slate-200 border-b border-slate-300 py-4.5">
        <Link href="/" className="font-bold font-4xl">
          Shafacode
        </Link>
      </SidebarHeader>
      <SidebarContent className="bg-slate-200">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname.startsWith(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      className={cn(isActive && 'bg-white')}
                      asChild
                    >
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
