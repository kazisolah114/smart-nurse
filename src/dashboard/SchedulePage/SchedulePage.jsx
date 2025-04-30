import React from 'react';
import FeatureHeader from '@/components/common/FeatureHeader';
import DateActions from './DateActions';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AddTaskDialog from './AddTaskDialog';
import Tasks from '@/components/tasks/tasks';
import { CheckCircle } from 'lucide-react';

const SchedulePage = () => {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <FeatureHeader title={"Schedule"} description={"Manage your shifts and tasks"} />
                <DateActions />
            </div>
            <Tabs defaultValue={"schedule"}>
                <TabsList>
                    <TabsTrigger value="schedule" className={'cursor-pointer'}>Schedule</TabsTrigger>
                    <TabsTrigger value="tasks" className={'cursor-pointer'}>Tasks</TabsTrigger>
                    <TabsTrigger value="calendar" className={'cursor-pointer'}>Calendar</TabsTrigger>
                </TabsList>
                <div className='bg-white rounded-md border p-3 mt-3'>
                    <TabsContent value="schedule">
                        Schedule
                    </TabsContent>
                    <TabsContent value="tasks">
                        <div className='flex items-center justify-between mb-3'>
                            <div className='mb-5'>
                                <h2 className='font-semibold text-lg text-gray-900'>Task Management</h2>
                                <p className='text-gray-700'>Organize and track your daily tasks</p>
                            </div>
                            <AddTaskDialog />
                        </div>
                        <Tabs defaultValue={"today"}>
                            <TabsList>
                                <TabsTrigger value="today" className={'cursor-pointer'}>Today</TabsTrigger>
                                <TabsTrigger value="upcoming" className={'cursor-pointer'}>Upcoming</TabsTrigger>
                                <TabsTrigger value="completed" className={'cursor-pointer'}>Completed</TabsTrigger>
                            </TabsList>
                            <div className=''>
                                <TabsContent value="today">
                                    <Tasks />
                                </TabsContent>
                                <TabsContent value="upcoming">
                                    <Tasks />
                                </TabsContent>
                                <TabsContent value="completed">
                                    <div className='w-full flex flex-col items-center justify-center my-5'>
                                        <CheckCircle className='w-10 h-10 text-gray-500 mb-3' />
                                        <h5 className='font-medium text-gray-800 mb-1'>No Completed Tasks</h5>
                                        <p className='text-gray-700'>You haven't completed any tasks yet today.</p>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </TabsContent>
                    <TabsContent value="calendar">
                        Calendar
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    );
};

export default SchedulePage;