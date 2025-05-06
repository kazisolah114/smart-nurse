import { Info, Users } from 'lucide-react';
import React from 'react';

const PatientsUpdate = ({ patients }) => {
    return (
        <div className='mt-7 grid grid-cols-4 gap-5'>
            <div className='border rounded-md bg-white p-5 flex items-center justify-between'>
                <div>
                    <p className='text-gray-800'>Total Tatients</p>
                    <h4 className=' font-bold text-gray-900 text-2xl'>{patients.length}</h4>
                    <p className='text-xs text-gray-700'>Currently admitted</p>
                </div>
                <div className='bg-blue-500/10 p-3 w-max rounded-full'>
                    <Users className='w-5 h-5 text-blue-500' />
                </div>
            </div>
            <div className='border rounded-md bg-white p-5 flex items-center justify-between'>
                <div>
                    <p className='text-gray-800'>Critical Patients</p>
                    <h4 className=' font-bold text-gray-900 text-2xl'>
                        {patients.filter(patient => patient.status === "Critical").length}
                    </h4>
                    <p className='text-xs text-gray-700'>Currently admitted</p>
                </div>
                <div className='bg-red-500/10 p-3 w-max rounded-full'>
                    <Info className='w-5 h-5 text-red-500' />
                </div>
            </div>
            <div className='border rounded-md bg-white p-5 flex items-center justify-between'>
                <div>
                    <p className='text-gray-800'>Stable Tatients</p>
                    <h4 className=' font-bold text-gray-900 text-2xl'>
                        {patients.filter(patient => patient.status === "Stable").length}
                    </h4>
                    <p className='text-xs text-gray-700'>Currently admitted</p>
                </div>
                <div className='bg-green-500/10 p-3 w-max rounded-full'>
                    <Users className='w-5 h-5 text-green-500' />
                </div>
            </div>
            <div className='border rounded-md bg-white p-5 flex items-center justify-between'>
                <div>
                    <p className='text-gray-800'>Improving Tatients</p>
                    <h4 className=' font-bold text-gray-900 text-2xl'>
                        {patients.filter(patient => patient.status === "Improving").length}
                    </h4>
                    <p className='text-xs text-gray-700'>Currently admitted</p>
                </div>
                <div className='bg-yellow-500/10 p-3 w-max rounded-full'>
                    <Users className='w-5 h-5 text-yellow-500' />
                </div>
            </div>
        </div>
    );
};

export default PatientsUpdate;