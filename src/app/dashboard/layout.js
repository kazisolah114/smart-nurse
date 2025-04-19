import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <main>
            <header>Dashboard header</header>
            <div className='grid grid-cols-12'>
                <aside className='col-span-2'>
                    Sidebar
                </aside>
                <div className='col-span-10'>
                    {children}
                </div>
            </div>
        </main>
    );
};

export default DashboardLayout;