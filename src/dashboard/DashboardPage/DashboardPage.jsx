import React from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Activity, Calendar, ChevronRight, Clipboard, Clock, Heart, MessageCircle, TrendingUp, Users } from 'lucide-react';
import MedicationSummary from './MedicationSummary';
import ShiftSummary from './ShiftSummary';
import Patients from '@/components/patients/patients';
import Tasks from '@/components/tasks/tasks';
import CriticalAlerts from './CriticalAlerts';
import WellnessAndTips from './WellnessAndTips';

const DashboardPage = () => {
    const updates = [
        { title: "Shift Progress", update: "31%", latest: <Progress value={31} className={"mt-2"} /> },
        { title: "Patient Assigned", update: "12", latest: "4 new today", icon: <Users className={"w-4 h-4"} /> },
        { title: "Task Completed", update: "8/14", latest: "On track", icon: <TrendingUp className={"w-4 h-4"} /> },
        { title: "Next Medication", update: "11:00 AM", latest: "In 15 minutes", icon: <Clock className={"w-4 h-4"} /> },
    ]
    return (
        <>
            {/* Updates */}
            <section className='bg-emerald-600 p-4 rounded-md'>
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
            </section>

            <section className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-10">
                {/* Patient Overview */}
                <div className="bg-white border p-4 col-span-12 md:col-span-8 rounded-md">
                    <div className='flex items-center justify-between'>
                        <h3 className='flex items-center gap-3 text-lg text-gray-900 font-semibold'><span className='bg-emerald-600/20 text-emerald-600 rounded-full w-8 h-8 flex items-center justify-center'><Users className='w-4 h-4' /></span> Patient Overview</h3>
                        <Button variant={"ghost"} className={"cursor-pointer text-gray-800 flex items-center gap-2"}>View all <ChevronRight className='w-5 h-5' /></Button>
                    </div>
                    <div className='mt-5 grid grid-cols-2 gap-3'>
                        <div className='bg-blue-600/15 p-4 rounded-md flex items-center gap-4'>
                            <span className='bg-blue-600/20 text-blue-600 rounded-full w-11 h-11 flex items-center justify-center'><Activity className='w-6 h-6' /></span>
                            <div className=''>
                                <p className='text-blue-600'>Critical Patients</p>
                                <h5 className='font-bold text-2xl text-gray-800'>2</h5>
                            </div>
                        </div>
                        <div className='bg-green-600/15 p-4 rounded-md flex items-center gap-4'>
                            <span className='bg-green-600/20 text-green-600 rounded-full w-11 h-11 flex items-center justify-center'><Heart className='w-6 h-6' /></span>
                            <div className=''>
                                <p className='text-green-600'>Stable Patients</p>
                                <h5 className='font-bold text-2xl text-gray-800'>8</h5>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <Patients />
                        <div className='w-full flex justify-center items-center'>
                            <Button variant={"ghost"} className={" border cursor-pointer text-blue-600 flex items-center  gap-2"}>View all patients <ChevronRight className='w-5 h-5' /></Button>
                        </div>
                    </div>
                </div>
                <MedicationSummary />
                {/* Upcoming Tasks */}
                <div className="bg-white border p-4 col-span-12 md:col-span-8 rounded-md">
                    <div className='flex items-center justify-between'>
                        <h3 className='flex items-center gap-3 text-lg text-gray-900 font-semibold'><span className='bg-purple-600/20 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center'><Clipboard className='w-4 h-4' /></span> Upcoming Tasks</h3>
                        <Button variant={"ghost"} className={"cursor-pointer text-gray-800 flex items-center gap-2"}>View schedule <ChevronRight className='w-5 h-5' /></Button>
                    </div>
                    <Tasks />
                </div>
                <ShiftSummary />
                <CriticalAlerts />
                <WellnessAndTips />
            </section>
        </>
    );
};

export default DashboardPage;