import React from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Activity, BarChart3, Calendar, CheckCircle, ChevronRight, Clipboard, Clock, Heart, MessageCircle, PieChart, Pill, TrendingUp, Users } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';

const DashboardPage = () => {
    const updates = [
        { title: "Shift Progress", update: "31%", latest: <Progress value={31} className={"mt-2"} /> },
        { title: "Patient Assigned", update: "12", latest: "4 new today", icon: <Users className={"w-4 h-4"} /> },
        { title: "Task Completed", update: "8/14", latest: "On track", icon: <TrendingUp className={"w-4 h-4"} /> },
        { title: "Next Medication", update: "11:00 AM", latest: "In 15 minutes", icon: <Clock className={"w-4 h-4"} /> },
    ]
    const patients = [
        {
            id: "P001",
            name: "Robert Johnson",
            age: 72,
            gender: "Male",
            room: 215,
            condition: "CHF",
            bp: "160/95",
            hr: 110,
            temp: "99.1°F",
            oxygenLevel: "89%",
            mobilityStatus: "Assisted",
            status: "Critical",
            medications: ["Furosemide", "Lisinopril"],
            assignedNurse: "Nurse Olivia",
            alerts: ["High BP", "Tachycardia"],
            notes: "Requires frequent monitoring. Difficulty breathing reported.",
            lastUpdated: "2025-04-20T09:30:00Z",
            nextCheckup: "2025-04-20T11:00:00Z"
        },
        {
            id: "P002",
            name: "Maria Garcia",
            age: 54,
            gender: "Female",
            room: 305,
            condition: "Pneumonia",
            bp: "125/85",
            hr: 92,
            temp: "100.2°F",
            oxygenLevel: "94%",
            mobilityStatus: "Bed Rest",
            status: "Improving",
            medications: ["Azithromycin", "Paracetamol"],
            assignedNurse: "Nurse Ethan",
            alerts: ["Fever", "Respiratory Watch"],
            notes: "Responding well to antibiotics. Monitor temp and breathing.",
            lastUpdated: "2025-04-20T08:45:00Z",
            nextCheckup: "2025-04-20T12:00:00Z"
        },
        {
            id: "P003",
            name: "John Doe",
            age: 67,
            gender: "Male",
            room: 302,
            condition: "Diabetes Type 2",
            bp: "130/80",
            hr: 78,
            temp: "98.6°F",
            oxygenLevel: "97%",
            mobilityStatus: "Independent",
            status: "Stable",
            medications: ["Metformin"],
            assignedNurse: "Nurse Ava",
            alerts: [],
            notes: "Blood sugar under control. Routine monitoring required.",
            lastUpdated: "2025-04-20T09:00:00Z",
            nextCheckup: "2025-04-20T14:00:00Z"
        }
    ];
    const tasks = [
        {
            title: "Medication Round",
            status: "Upcoming",
            description: "Administer scheduled medications to patients in rooms 302-310",
            time: "11:00 AM"
        },
        {
            title: "Team Huddle",
            status: "Upcoming",
            description: "Daily team meeting to discuss patient status and care plans",
            time: "12:30 PM"
        },
        {
            title: "Patient Discharge - Room 310",
            status: "Upcoming",
            description: "Complete discharge paperwork and patient education",
            time: "2:00 PM"
        },
        {
            title: "Documentation Update",
            status: "Upcoming",
            description: "Update patient charts and care documentation",
            time: "3:30 PM"
        }
    ];

    return (
        <>
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
                <div className="border p-4 col-span-12 md:col-span-8 rounded-md">
                    <div className='flex items-center justify-between'>
                        <h3 className='flex items-center gap-3 text-lg text-gray-900 font-semibold'><span className='bg-emerald-600/20 text-emerald-600 rounded-full w-8 h-8 flex items-center justify-center'><Users className='w-5 h-5' /></span> Patient Overview</h3>
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
                        <ul className='flex flex-col gap-2 mb-5'>
                            {
                                patients.map(patient => {
                                    return (
                                        <li key={patient.id} className='border rounded-md p-3 flex justify-between items-center hover:bg-gray-300/10 duration-200'>
                                            <div className='flex items-center gap-2'>
                                                <Avatar className={"w-10 h-10 text-gray-900"}>
                                                    <AvatarImage src="" alt="patient" />
                                                    <AvatarFallback>{patient.name.slice(0, 1)}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <h6 className='font-semibold text-gray-900 text-base'>{patient.name}</h6>
                                                    <p className='text-base text-gray-700'>Age {patient.age} • Room {patient.room} • Condition {patient.condition}</p>
                                                </div>
                                            </div>
                                            <div className='justify-end text-xs flex gap-5 items-center'>
                                                <div className="">
                                                    <p className="text-gray-500 mb-1">BP</p>
                                                    <p className="font-medium">{patient.bp}</p>
                                                </div>
                                                <div className="">
                                                    <p className="text-gray-500 mb-1">HR</p>
                                                    <p className="font-medium">{patient.hr}</p>
                                                </div>
                                                <div className="">
                                                    <p className="text-gray-500 mb-1">Temp</p>
                                                    <p className="font-medium">{patient.temp}</p>
                                                </div>
                                                <span className={`bg-blue-600/15 rounded-full px-2 py-1`}>{patient.status}</span>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className='w-full flex justify-center items-center'>
                            <Button variant={"ghost"} className={" border cursor-pointer text-blue-600 flex items-center  gap-2"}>View all patients <ChevronRight className='w-5 h-5' /></Button>
                        </div>
                    </div>
                </div>
                {/* Medication summary */}
                <div className="border p-4 col-span-12 md:col-span-4 rounded-md">
                    <div className=''>
                        <h3 className='flex items-center gap-3 text-lg text-gray-900 font-semibold'><span className='bg-rose-600/20 text-rose-600 rounded-full w-8 h-8 flex items-center justify-center'><Pill className='w-5 h-5' /></span> Medication Summary</h3>
                    </div>
                    <div className="pt-4">
                        <div className="flex justify-center mb-4">
                            <div className="relative h-40 w-40">
                                <PieChart className="h-full w-full text-gray-200" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-3xl font-bold">24</span>
                                    <span className="text-sm text-gray-500">Total Doses</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-green-50 rounded-lg p-3">
                                <p className="text-base mb-1 text-green-600 flex items-center gap-2"><CheckCircle className='w-4 h-4' /> Administered</p>
                                <p className="text-xl font-bold">14</p>
                            </div>
                            <div className="bg-amber-50 rounded-lg p-3">
                                <p className="text-base mb-1 text-amber-600 flex items-center gap-2"><Clock className='w-4 h-4' /> Pending</p>
                                <p className="text-xl font-bold">10</p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <h4 className="text-sm font-medium mb-2">Next Medications</h4>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center p-2 bg-amber-50 rounded-md">
                                    <div>
                                        <p className="font-medium">Insulin</p>
                                        <p className="text-xs text-gray-500">John Doe - Room 302</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-medium">11:00 AM</p>
                                        <p className="text-xs text-amber-600">In 18 min</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-amber-50 rounded-md">
                                    <div>
                                        <p className="font-medium">Albuterol</p>
                                        <p className="text-xs text-gray-500">Maria Garcia - Room 305</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-medium">11:30 AM</p>
                                        <p className="text-xs text-amber-600">In 48 min</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Upcoming Tasks */}
                <div className="border p-4 col-span-12 md:col-span-8 rounded-md">
                    <div className='flex items-center justify-between'>
                        <h3 className='flex items-center gap-3 text-lg text-gray-900 font-semibold'><span className='bg-purple-600/20 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center'><Clipboard className='w-5 h-5' /></span> Upcoming Tasks</h3>
                        <Button variant={"ghost"} className={"cursor-pointer text-gray-800 flex items-center gap-2"}>View schedule <ChevronRight className='w-5 h-5' /></Button>
                    </div>
                    <div className="mt-5">
                        <ul className='flex flex-col gap-2 mb-5'>
                            {
                                tasks.map((task, index) => {
                                    return (
                                        <li key={index} className="border rounded-md p-3 flex justify-between items-center">
                                            <div className="flex items-start gap-3">
                                                <div className={`h-3 w-3 rounded-full mt-1.5 bg-red-400`} />
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <p className="font-medium">{task.title}</p>
                                                        <span className={`text-xs px-2 py-0.5 rounded-full bg-slate-200`}>Upcoming</span>
                                                    </div>
                                                    <p className="text-sm text-gray-500 mt-1">{task.description}</p>
                                                </div>
                                            </div>
                                            <div className="justify-end text-right">
                                                <p className="font-medium">{task.time}</p>
                                                <Button variant="outline" size="sm" className="cursor-pointer mt-1 h-7 px-2 ">
                                                    <CheckCircle className="h-4 w-4 mr-1" />
                                                    Complete
                                                </Button>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                {/* Shift summary */}
                <div className="border p-4 col-span-12 md:col-span-4 rounded-md max-h-max">
                    <div className="">
                        <h3 className='flex items-center gap-3 text-lg text-gray-900 font-semibold'><span className='bg-teal-600/20 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center'><BarChart3 className='w-5 h-5' /></span> Shift Summary</h3>
                    </div>
                    <div className="mt-5">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-500">Shift Completion</span>
                                <span className="font-medium">31%</span>
                            </div>
                            <Progress value={31} className="h-2" />

                            <div className="grid grid-cols-2 gap-3 mt-4">
                                <div className="bg-gray-50 rounded-lg p-3">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-base">Completed</span>
                                    </div>
                                    <p className="text-xl font-bold mt-1">8</p>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-3">
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4 text-amber-500" />
                                        <span className="text-base">Pending</span>
                                    </div>
                                    <p className="text-xl font-bold mt-1">6</p>
                                </div>
                            </div>

                            <div className="space-y-3 mt-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between ">
                                        <span className="text-gray-600">Documentation</span>
                                        <span className="font-medium">85%</span>
                                    </div>
                                    <Progress value={85} className="h-1.5" />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between ">
                                        <span className="text-gray-600">Medication Administration</span>
                                        <span className="font-medium">70%</span>
                                    </div>
                                    <Progress value={70} className="h-1.5" />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between ">
                                        <span className="text-gray-600">Patient Assessments</span>
                                        <span className="font-medium">60%</span>
                                    </div>
                                    <Progress value={60} className="h-1.5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DashboardPage;