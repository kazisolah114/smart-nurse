import React from 'react';
import { BarChart3, CheckCircle, Clock } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const ShiftSummary = () => {
    return (
        <div className="bg-white border p-4 col-span-12 md:col-span-4 rounded-md">
            <div className="">
                <h3 className='flex items-center gap-3 text-lg text-gray-900 font-semibold'><span className='bg-teal-600/20 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center'><BarChart3 className='w-4 h-4' /></span> Shift Summary</h3>
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
    );
};

export default ShiftSummary;