import React from 'react';
import Header from '@/dashboard/Header/Header';
import Sidebar from '@/dashboard/Sidebar/Sidebar';

const DashboardLayout = ({ children }) => {
    return (
        <main className='grid grid-cols-12 min-h-screen'>
            <Sidebar />
            <div className='lg:col-span-10 col-span-12'>
                <Header />
                <div className='p-5 bg-gray-200/20'>
                    {children}
                </div>
            </div>
        </main>
    );
};

export default DashboardLayout;