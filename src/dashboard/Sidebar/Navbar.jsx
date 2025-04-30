"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import { Calendar, Clock, FileQuestion, FileText, Home, MessageSquare, Search, Settings, Users2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Navbar = ({ setShowSidebar = () => { } }) => {
    const pathname = usePathname();
    const navItems = [
        { name: "Dashboard", href: "/dashboard", icon: Home },
        { name: "Patients", href: "/dashboard/patients", icon: Users2 },
        { name: "AI Assistant", href: "/dashboard/assistant", icon: MessageSquare },
        { name: "Documentation", href: "/dashboard/documentation", icon: FileText },
        { name: "Medications", href: "/dashboard/medications", icon: Clock },
        { name: "Schedule", href: "/dashboard/schedule", icon: Calendar },
        { name: "Medical Reference", href: "/dashboard/reference", icon: Search },
        { name: "Settings", href: "/dashboard/settings", icon: Settings },
        { name: "Help Center", href: "/dashboard/help", icon: FileQuestion },
    ]
    return (
        <nav className='p-3'>
            <ul className='space-y-2 pb-2'>
                {navItems.slice(0, 7).map((nav, index) => {
                    const Icon = nav.icon;
                    const isActive = pathname === nav.href;
                    return (
                        <li key={index} onClick={() => setShowSidebar(false)}>
                            <Link href={nav.href} className='cursor-pointer'>
                                <Button variant={isActive ? "secondary" : "ghost"} size={"lg"} className={"w-full justify-start cursor-pointer"}>
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
                        <li key={index} onClick={() => setShowSidebar(false)}>
                            <Link href={nav.href} className='cursor-pointer'>
                                <Button variant={isActive ? "secondary" : "ghost"} size={"lg"} className={"w-full justify-start cursor-pointer"}>
                                    <Icon className='w-5 h-5 mr-2' />
                                    {nav.name}
                                </Button>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
};

export default Navbar;