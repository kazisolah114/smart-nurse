import React from 'react';
import { CheckCircle, Clock, PieChart, Pill } from 'lucide-react';

const MedicationSummary = () => {
    return (
        <div className="bg-white border p-4 col-span-12 md:col-span-4 rounded-md">
            <div className=''>
                <h3 className='flex items-center gap-3 text-lg text-gray-900 font-semibold'><span className='bg-rose-600/20 text-rose-600 rounded-full w-8 h-8 flex items-center justify-center'><Pill className='w-4 h-4' /></span> Medication Summary</h3>
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
    );
};

export default MedicationSummary;