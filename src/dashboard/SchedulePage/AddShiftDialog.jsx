import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Hospital, Plus } from 'lucide-react';

const AddShiftDialog = ({ currentDate }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className={'bg-teal-600 hover:bg-teal-700 duration-200 cursor-pointer flex items-center gap-3'}><Plus className='w-5 h-5' /> Add Shift</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add new Shift</DialogTitle>
                    <DialogDescription>Schedule a new shift for {currentDate}</DialogDescription>
                </DialogHeader>
                <div className='space-y-5 mt-3'>
                    <div className='flex flex-col gap-3'>
                        <Label htmlFor='hospital' className={'text-sm text-gray-900'}>Hospital Name</Label>
                        <div className='relative'>
                            <Input id='hospital' placeholder={'e.g., St. Francis Medical'} className={'pl-8'} />
                            <Hospital className='w-4 h-4 text-gray-600 absolute top-[10px] left-2' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <Label htmlFor='shifttype'>Shift Type</Label>
                        <Select defaultValue='day'>
                            <SelectTrigger className='w-full'>
                                <SelectValue placeholder='Shift Type' />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='day'>Day shift</SelectItem>
                                <SelectItem value='night'>Night shift</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-3'>
                        <div className='flex flex-col gap-3'>
                            <Label htmlFor='starttime' className={'text-sm text-gray-900'}>Start Time</Label>
                            <Select defaultValue='7am'>
                                <SelectTrigger className='w-full'>
                                    <SelectValue placeholder='Start time' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value='7am'>07:00 AM</SelectItem>
                                    <SelectItem value='7pm'>07:00 PM</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <Label htmlFor='endtime' className={'text-sm text-gray-900'}>End Time</Label>
                            <Select defaultValue='7pm'>
                                <SelectTrigger className='w-full'>
                                    <SelectValue placeholder='End time' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value='7pm'>07:00 PM</SelectItem>
                                    <SelectItem value='7am'>07:00 AM (Next day)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <Label htmlFor='unit'>Unit / Department</Label>
                        <Select defaultValue='medical'>
                            <SelectTrigger className='w-full'>
                                <SelectValue placeholder='Unit' />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='emergency'>Emergency Department</SelectItem>
                                <SelectItem value='intensive'>Intensive care Unit</SelectItem>
                                <SelectItem value='medical'>Medical-Surgical</SelectItem>
                                <SelectItem value='pediatrics'>Pediatrics</SelectItem>
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

export default AddShiftDialog;