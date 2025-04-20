import React from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Calendar, Clock, MessageCircle, TrendingUp, Users } from 'lucide-react';

const DashboardPage = () => {
    const updates = [
        { title: "Shift Progress", update: "31%", latest: <Progress value={31} className={"mt-2"} /> },
        { title: "Patient Assigned", update: "12", latest: "4 new today", icon: <Users className={"w-4 h-4"} /> },
        { title: "Task Completed", update: "8/14", latest: "On track", icon: <TrendingUp className={"w-4 h-4"} /> },
        { title: "Next Medication", update: "11:00 AM", latest: "In 15 minutes", icon: <Clock className={"w-4 h-4"} /> },
    ]
    return (
        <>
            <div className='bg-emerald-600 p-4 rounded-md'>
                <div className='flex items-center justify-between '>
                    <div>
                        <h3 className='text-2xl font-bold mb-1 text-white'>Welcome back, Sarah!</h3>
                        <p className='text-slate-100'>Monday, May 15 • Day Shift (7:00 AM - 7:00 PM)</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Button variant="ghost" className="rounded-sm cursor-pointer text-white bg-emerald-700 hover:bg-emerald-800 hover:text-white"><Calendar className='w-5 h-5' /> Today</Button>
                        <Button variant="ghost" className="rounded-sm cursor-pointer text-white bg-emerald-700 hover:bg-emerald-800 hover:text-white"><MessageCircle className='w-5 h-5' /> New Message</Button>
                    </div>
                </div>
                <div className='updates mt-8'>
                    <ul className='grid grid-cols-4 gap-5'>
                        {
                            updates.map((update, index) => {
                                return (
                                    <li key={index} className='bg-white/20 p-3 rounded-md'>
                                        <div className='flex items-center justify-between text-white mb-7'>
                                            <p className='font-medium text-[15px]'>{update.title}</p>
                                            <p className="font-semibold text-xl">{update.update}</p>
                                        </div>
                                        <div className='flex items-center gap-2 text-slate-100 text-sm'>{update.icon} {update.latest}</div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default DashboardPage;