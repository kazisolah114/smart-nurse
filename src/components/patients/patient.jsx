import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const Patient = ({ patient }) => {
    return (
        <li className='border rounded-md p-3 flex justify-between items-center hover:bg-gray-300/10 duration-200'>
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
    );
};

export default Patient;