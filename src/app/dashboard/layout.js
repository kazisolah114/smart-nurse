import React from 'react';
import Header from '@/dashboard/Header/Header';
import Sidebar from '@/dashboard/Sidebar/Sidebar';

const DashboardLayout = ({ children }) => {
    return (
        <main className='grid grid-cols-12 h-screen'>
            <Sidebar />
            <div className='col-span-10'>
                <Header />
                <div className='p-3'>
                    {children}
                </div>
            </div>
        </main>
    );
};

export default DashboardLayout;