import React from 'react';
import { LogOut, PlusSquare, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from './Navbar';

const Sidebar = () => {
    return (
        <aside className='col-span-2 flex flex-col border-r h-screen sticky top-0 max-lg:hidden'>
            <div className='border-b py-[18px]'>
                <h2 className=" text-teal-600 font-bold text-2xl flex items-center gap-2 px-3 cursor-pointer">
                    <PlusSquare className="h-8 w-8" /> Smart Nurse
                </h2>
            </div>
            <Navbar />
            <div className='mt-auto border-t p-2'>
                <Button variant="ghost" size={"lg"} className="w-full justify-start cursor-pointer hover:bg-red-50 text-red-500 hover:text-red-700"><LogOut className='w-5 h-5 mr-2' /> Log out</Button>
            </div>
        </aside>
    );
};

export default Sidebar;