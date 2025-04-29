"use client";
import React, { useEffect, useState } from 'react';
import FeatureHeader from '@/components/common/FeatureHeader';
import { Input } from '@/components/ui/input';
import { Calendar, CheckCircle, ChevronLeft, ChevronRight, Clock, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import axios from 'axios';
import MedicationDetailsDialog from './MedicationDetailsDialog';

const MedicationsPage = () => {
    const [medications, setMedications] = useState([]);
    useEffect(() => {
        const handleFetchMedications = async () => {
            try {
                const response = await axios.get('/data/medications.json');
                if (response.status === 200) {
                    setMedications(response.data);
                }
            } catch (error) {
                console.log(error)
            }
        }
        handleFetchMedications();
    }, [])
    console.log(medications)

    const [searchQuery, setSearchQuery] = useState("");
    const [currentDate, setCurrentDate] = useState(new Date());
    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        })
    }
    const navigateDate = (navigator) => {
        const newDate = new Date(currentDate);
        if (navigator === 'prev') {
            newDate.setDate(newDate.getDate() - 1);
        } else {
            newDate.setDate(newDate.getDate() + 1);
        }
        setCurrentDate(newDate);
    }
    return (
        <div>
            <FeatureHeader title={"Medication Alerts"} description={"Track and manage medication schedules"} />
            <div className='flex items-center justify-between max-sm:flex-col max-sm:gap-3 bg-white rounded-md border p-5'>
                <div className='flex items-center gap-3'>
                    <Button variant={'outline'} onClick={() => navigateDate("prev")} className={'cursor-pointer'}>
                        <ChevronLeft className='w-5 h-5 text-gray-700' />
                    </Button>
                    <div className="flex items-center gap-2">
                        <Calendar className='w-5 h-5 text-gray-900' />
                        <span className='font-medium text-gray-800'>{formatDate(currentDate)}</span>
                    </div>
                    <Button variant={'outline'} onClick={() => navigateDate("next")} className={'cursor-pointer'}>
                        <ChevronRight className='w-5 h-5 text-gray-900' />
                    </Button>
                </div>
                <div className="flex items-center gap-2 relative">
                    <Search className='w-4 h-4 text-gray-500 absolute top-3 left-2' />
                    <Input
                        className={"w-72 pl-8 py-5"}
                        placeholder="Search medication or patient"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>
            <div className='mt-8'>
                <Tabs defaultValue={'timeline'}>
                    <TabsList>
                        <TabsTrigger value="timeline" className={'cursor-pointer'}>Timeline</TabsTrigger>
                        <TabsTrigger value="patient" className={'cursor-pointer'}>By Patient</TabsTrigger>
                        <TabsTrigger value="medications" className={'cursor-pointer'}>All Medications</TabsTrigger>
                    </TabsList>
                    <div>
                        <TabsContent value="timeline">
                            {(() => {
                                const upcomingMedications = medications.filter(
                                    medication => medication.status === "Scheduled"
                                );
                                return (
                                    <div className='bg-white border p-5 rounded-md mt-3'>
                                        <div className='flex justify-between items-center mb-5'>
                                            <h3 className='flex items-center gap-2 font-semibold sm:text-lg'>
                                                <Clock className='w-5 h-5 text-yellow-500' />
                                                Upcoming Medication
                                            </h3>
                                            <p className='bg-yellow-500/10 border border-yellow-500 text-yellow-700 font-semibold rounded-full px-3 py-1 text-sm'>
                                                {upcomingMedications.length} Scheduled
                                            </p>
                                        </div>
                                        {upcomingMedications.length > 0 ?
                                            <ul className='space-y-3'>
                                                {upcomingMedications.map((medication, index) => (
                                                    <li key={index} className='bg-yellow-500/5 border border-yellow-500/50 p-3 rounded-md flex items-center justify-between'>
                                                        <div>
                                                            <div className='flex items-center gap-3'>
                                                                <p className='font-semibold'>{medication.patient}</p>
                                                                <p className='w-max bg-white border font-medium rounded-full px-2 text-xs'>
                                                                    Room {medication.room}
                                                                </p>
                                                            </div>
                                                            <div className='flex items-center gap-2 my-1'>
                                                                <p className='font-semibold text-lg text-gray-900'>{medication.medication}</p>
                                                                <p className='w-max text-gray-600'>
                                                                    {medication.dosage}
                                                                </p>
                                                            </div>
                                                            <p className='text-gray-800 flex items-center gap-2'><Clock className='h-4 w-4' /> {medication.time}</p>
                                                        </div>
                                                        <MedicationDetailsDialog medication={medication} />
                                                    </li>
                                                ))}
                                            </ul>
                                            :
                                            <p className='text-center text-gray-600'>No upcoming medications found!</p>
                                        }
                                    </div>
                                );
                            })()}
                            {(() => {
                                const administeredMedications = medications.filter(
                                    medication => medication.status === "Completed"
                                );
                                return (
                                    <div className='bg-white border p-5 rounded-md mt-3'>
                                        <div className='flex justify-between items-center mb-5'>
                                            <h3 className='flex items-center gap-2 font-semibold sm:text-lg'>
                                                <CheckCircle className='w-5 h-5 text-green-500' />
                                                Administered Medication
                                            </h3>
                                            <p className='bg-green-500/10 border border-green-500 text-green-700 font-semibold rounded-full px-3 py-1 text-sm'>
                                                {administeredMedications.length} Completed
                                            </p>
                                        </div>
                                        {administeredMedications.length > 0 ?
                                            <ul className='space-y-3'>
                                                {administeredMedications.map((medication, index) => (
                                                    <li key={index} className='bg-green-500/5 border border-green-500/50 p-3 rounded-md flex items-center justify-between'>
                                                        <div>
                                                            <div className='flex items-center gap-3'>
                                                                <p className='font-semibold'>{medication.patient}</p>
                                                                <p className='w-max bg-white border font-medium rounded-full px-2 text-xs'>
                                                                    Room {medication.room}
                                                                </p>
                                                            </div>
                                                            <div className='flex items-center gap-2 my-1'>
                                                                <p className='font-semibold text-lg text-gray-900'>{medication.medication}</p>
                                                                <p className='w-max text-gray-600'>
                                                                    {medication.dosage}
                                                                </p>
                                                            </div>
                                                            <p className='text-gray-800 flex items-center gap-2'><Clock className='h-4 w-4' /> {medication.time}</p>
                                                        </div>
                                                        <MedicationDetailsDialog medication={medication} />
                                                    </li>
                                                ))}
                                            </ul>
                                            :
                                            <p className='text-center text-gray-600'>No upcoming medications found!</p>
                                        }
                                    </div>
                                );
                            })()}
                        </TabsContent>
                        <TabsContent value="patient">Patients</TabsContent>
                        <TabsContent value="medications">Medications</TabsContent>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default MedicationsPage;