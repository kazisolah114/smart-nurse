import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Info } from 'lucide-react';

const MedicationDetailsDialog = ({ medication }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'outline'} className={'cursor-pointer'}><Info className='w-5 h-5' /></Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{medication.medication}</DialogTitle>
                    <DialogDescription>Detailed information about this medication</DialogDescription>
                </DialogHeader>
                <div>
                    <div className='grid grid-cols-2 gap-3'>
                        <div>
                            <span className='text-gray-600 font-medium text-sm'>Patient</span>
                            <p className=''>{medication.patient}</p>
                        </div>
                        <div>
                            <span className='text-gray-600 font-medium text-sm'>Room</span>
                            <p>{medication.room}</p>
                        </div>
                        <div>
                            <span className='text-gray-600 font-medium text-sm'>Dosage</span>
                            <p>{medication.dosage}</p>
                        </div>
                        <div>
                            <span className='text-gray-600 font-medium text-sm'>Time</span>
                            <p>{medication.time}</p>
                        </div>
                    </div>
                    <div className='my-3'>
                        <span className='text-gray-600 font-medium text-sm'>Administration</span>
                        <p>{medication.administration}</p>
                    </div>
                    <div>
                        <span className='text-gray-600 font-medium text-sm'>Notes</span>
                        <p>{medication.notes}</p>
                    </div>
                    <div className='my-3'>
                        <span className='text-gray-600 font-medium'>Status</span>
                        <p className={`${medication.status === "Completed" ? 'bg-green-500/10 border border-green-500 text-green-700' : 'bg-yellow-500/10 border border-yellow-500 text-yellow-700'} mt-1 font-semibold rounded-full px-3 text-sm w-max`}>{medication.status}</p>
                    </div>
                    {medication.status !== "Completed" &&
                        <div className='flex justify-end'>
                            <Button className={'cursor-pointer bg-teal-600 hover:bg-teal-700 duration-200'}>Mark as administered</Button>
                        </div>
                    }
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default MedicationDetailsDialog;