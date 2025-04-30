import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, Plus } from 'lucide-react';
import React from 'react';

const AddTaskDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className={'bg-teal-600 hover:bg-teal-700 duration-200 cursor-pointer flex items-center gap-3'}><Plus className='w-5 h-5' /> Add task</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add new Task</DialogTitle>
                    <DialogDescription>Create a new task for your schedule</DialogDescription>
                </DialogHeader>
                <div className='space-y-5 mt-3'>
                    <div className='flex flex-col gap-3'>
                        <Label htmlFor='task-title' className={'text-sm text-gray-900'}>Task Title</Label>
                        <Input id='task-title' placeholder={'e.g., Medication Round'} />
                    </div>
                    <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-3'>
                        <div className='flex flex-col gap-3'>
                            <Label htmlFor='task-date' className={'text-sm text-gray-900'}>Date</Label>
                            <div className='relative'>
                                <Input id='task-date' placeholder={'Select date'} className={'pl-8'} />
                                <Calendar className='w-4 h-4 text-gray-600 absolute top-[10px] left-2' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <Label htmlFor='task-time' className={'text-sm text-gray-900'}>Time</Label>
                            <div className='relative'>
                                <Input id='task-time' placeholder={'Select time'} className={'pl-8'} />
                                <Clock className='w-4 h-4 text-gray-600 absolute top-[10px] left-2' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <Label htmlFor='duration'>Duration</Label>
                        <Select defaultValue='30m'>
                            <SelectTrigger className='w-full'>
                                <SelectValue placeholder='Task duration' />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='15m'>15 minutes</SelectItem>
                                <SelectItem value='30m'>30 minutes</SelectItem>
                                <SelectItem value='45m'>45 minutes</SelectItem>
                                <SelectItem value='1h'>1 hour</SelectItem>
                                <SelectItem value='2h'>2 hours</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <Label htmlFor='priority'>Priority</Label>
                        <Select defaultValue='medium'>
                            <SelectTrigger className='w-full'>
                                <SelectValue placeholder='Task priority' />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='high'>High</SelectItem>
                                <SelectItem value='medium'>Medium</SelectItem>
                                <SelectItem value='low'>Low</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className='flex items-center gap-3 justify-end'>
                        <Button variant={'outline'} className={'cursor-pointer'}>Cancel</Button>
                        <Button className={'bg-teal-600 hover:bg-teal-700 duration-200 cursor-pointer'}>Add Task</Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AddTaskDialog;