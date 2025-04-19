"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import { Calendar, Clock, FileQuestion, FileText, Home, LogOut, MessageSquare, Search, Settings, Shield, Users2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Sidebar = () => {
    const pathname = usePathname();
    const navItems = [
        { name: "Dashboard", href: "/dashboard", icon: Home },
        { name: "Patients", href: "/patients", icon: Users2 },
        { name: "AI Assistant", href: "/dashboard/assistant", icon: MessageSquare },
        { name: "Documentation", href: "/dashboard/documentation", icon: FileText },
        { name: "Medications", href: "/dashboard/medications", icon: Clock },
        { name: "Medical Reference", href: "/dashboard/reference", icon: Search },
        { name: "Schedule", href: "/dashboard/schedule", icon: Calendar },
        { name: "Settings", href: "/dashboard/settings", icon: Settings },
        { name: "Help Center", href: "/dashboard/help", icon: FileQuestion },
    ]
    return (
        <aside className='col-span-2 flex flex-col border-r'>
            <div className='border-b py-[18px]'>
                <h2 className='text-emerald-600 font-medium text-2xl flex items-center gap-2 px-3'><Shield className='h-6 w-6' /> Smart Nurse</h2>
            </div>
            <nav className='p-3'>
                <ul className='space-y-2 pb-2'>
                    {navItems.slice(0, 7).map((nav, index) => {
                        const Icon = nav.icon;
                        const isActive = pathname === nav.href;
                        return (
                            <li key={index} className=''>
                                <Link href={nav.href} className='cursor-pointer'>
                                    <Button variant={isActive ? "secondary" : "ghost"} className={"w-full justify-start cursor-pointer"}>
                                        <Icon className='w-5 h-5 mr-2' />
                                        {nav.name}
                                    </Button>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <ul className='space-y-2 border-t pt-2'>
                    {navItems.slice(7, 9).map((nav, index) => {
                        const Icon = nav.icon;
                        const isActive = pathname === nav.href;
                        return (
                            <li key={index} className=''>
                                <Link href={nav.href} className='cursor-pointer'>
                                    <Button variant={isActive ? "secondary" : "ghost"} className={"w-full justify-start cursor-pointer"}>
                                        <Icon className='w-5 h-5 mr-2' />
                                        {nav.name}
                                    </Button>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <div className='mt-auto border-t p-2'>
                <Button variant="ghost" className="w-full justify-start cursor-pointer hover:bg-red-50 text-red-500 hover:text-red-700"><LogOut className='w-5 h-5 mr-2' /> Log out</Button>
            </div>
        </aside>
    );
};

export default Sidebar;