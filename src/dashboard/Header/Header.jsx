"use client";
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';

const Header = () => {
    const [notifications, setNotifications] = useState(3)
    return (
        <header className='flex px-3 py-4 border-b'>
            <div className="ml-auto flex items-center gap-4">
                <Button size="icon" variant="ghost" className="relative cursor-pointer" onClick={() => setNotifications(0)}>
                    <Bell className="h-5 w-5" />
                    {notifications > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {notifications}
                        </span>
                    )}
                </Button>
                <div className="flex items-center gap-3">
                    <Avatar>
                        <AvatarImage src="" alt="User" />
                        <AvatarFallback size="1px"></AvatarFallback>
                    </Avatar>
                    <div className="hidden lg:block">
                        <p className="text-sm font-medium">Sarah Nurse</p>
                        <p className="text-xs text-gray-500">RN, Emergency Department</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;