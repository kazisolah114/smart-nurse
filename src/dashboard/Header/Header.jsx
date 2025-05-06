"use client";
import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Bell, Menu, PlusCircle, PlusSquare, X } from 'lucide-react';
import { LogOut, Shield } from 'lucide-react';
import Navbar from '../Sidebar/Navbar';

const Header = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    useEffect(() => {
        if (showSidebar) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [showSidebar])

    const [notifications, setNotifications] = useState(3)
    return (
        <header className="flex px-5 py-4 border-b h-max sticky top-0 bg-white z-10">
            <div className='lg:ml-auto flex justify-between items-center w-full'>
                <h2 className="lg:hidden text-teal-600 font-semibold text-xl flex items-center gap-2 cursor-pointer">
                    <PlusSquare className="h-7 w-7" /> Smart Nurse
                </h2>
                <div className="ml-auto flex items-center gap-4 relative top-1">
                    <Button
                        size="icon"
                        variant="ghost"
                        className="relative cursor-pointer"
                        onClick={() => setNotifications(0)}
                    >
                        <Bell className="h-6 w-6" />
                        {notifications > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {notifications}
                            </span>
                        )}
                    </Button>

                    <div className="flex items-center gap-3 max-lg:hidden">
                        <Avatar className="w-9 h-9">
                            <AvatarImage src="" alt="User" />
                            <AvatarFallback>S</AvatarFallback>
                        </Avatar>
                        <div className="hidden lg:block">
                            <p className="text-sm font-medium">Sarah Nurse</p>
                            <p className="text-xs text-gray-500">RN, Emergency Department</p>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button onClick={() => setShowSidebar(true)}>
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/70 transition-opacity duration-500 ease-in-out z-10 ${showSidebar ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setShowSidebar(false)}
            ></div>

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-20 h-screen w-2/3 bg-white transform transition-transform duration-500 ease-in-out ${showSidebar ? "translate-x-0" : "-translate-x-full"
                    } flex flex-col`}
            >
                <div className="border-b py-[18px] flex items-center justify-between px-3">
                    <h2 className="lg:hidden text-teal-600 font-semibold text-xl flex items-center gap-2 cursor-pointer">
                        <PlusSquare className="h-7 w-7" /> Smart Nurse
                    </h2>
                    <button onClick={() => setShowSidebar(false)} className='relative top-[2px]'>
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <Navbar setShowSidebar={setShowSidebar} />

                <div className="mt-auto border-t p-2 -mb-16">
                    <Button
                        variant="ghost"
                        size="lg"
                        className="w-full justify-start cursor-pointer hover:bg-red-50 text-red-500 hover:text-red-700"
                    >
                        <LogOut className="w-5 h-5 mr-2" /> Log out
                    </Button>
                </div>
            </aside>
        </header>
    );
};

export default Header;