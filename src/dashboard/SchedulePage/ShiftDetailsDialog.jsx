import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Info } from 'lucide-react';

const ShiftDetailsDialog = ({ shift }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'outline'} className={'cursor-pointer'}><Info className='w-5 h-5' /></Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{shift.date}'s shift details</DialogTitle>
                    <DialogDescription>Detailed information about this shift</DialogDescription>
                </DialogHeader>
                <div>
                    <div className='grid grid-cols-2 gap-3'>
                        <div>
                            <span className='text-gray-600 font-medium text-sm'>Date</span>
                            <p className=''>{shift.date}</p>
                        </div>
                        <div>
                            <span className='text-gray-600 font-medium text-sm'>Shift Type</span>
                            <p>{shift.shiftType}</p>
                        </div>
                        <div>
                            <span className='text-gray-600 font-medium text-sm'>Time Start</span>
                            <p>{shift.timeStart}</p>
                        </div>
                        <div>
                            <span className='text-gray-600 font-medium text-sm'>Time End</span>
                            <p>{shift.timeEnd}</p>
                        </div>
                    </div>
                    <div className='my-3'>
                        <span className='text-gray-600 font-medium text-sm'>Hospital Name</span>
                        <p>{shift.hospitalName}</p>
                    </div>
                    <div>
                        <span className='text-gray-600 font-medium text-sm'>Unit</span>
                        <p>{shift.unit}</p>
                    </div>
                    <div className='my-3'>
                        <span className='text-gray-600 font-medium'>Status</span>
                        <p className={`${shift.status === "Confirmed" ? 'bg-green-500/10 border border-green-500 text-green-700' : 'bg-yellow-500/10 border border-yellow-500 text-yellow-700'} mt-1 font-semibold rounded-full px-3 text-sm w-max`}>{shift.status}</p>
                    </div>
                    {shift.status !== "Confirmed" &&
                        <div className='flex items-center gap-3 justify-end'>
                            <Button variant={'outline'} className={'cursor-pointer'}>Cancel</Button>
                            <Button className={'bg-teal-600 hover:bg-teal-700 duration-200 cursor-pointer'}>Mark as Confirmed</Button>
                        </div>
                    }
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ShiftDetailsDialog;