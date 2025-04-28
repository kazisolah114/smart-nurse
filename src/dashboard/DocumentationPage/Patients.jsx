import React from 'react';
import { ChevronRight } from 'lucide-react';

const Patients = ({ patients,selectedPatient, setSelectedPatient }) => {
    return (
        <div className={`col-span-4 bg-white rounded-md border md:max-h-[calc(100vh-13rem)] md:overflow-auto ${selectedPatient ? 'max-md:hidden' : ''}`}>
            <ul>
                {
                    patients.map(patient => {
                        return (
                            <li key={patient.id} onClick={() => setSelectedPatient(patient)} className='border-b p-3 cursor-pointer hover:bg-gray-50 duration-200 flex items-center justify-between'>
                                <div>
                                    <h5 className='font-medium mb-1'>{patient.name}</h5>
                                    <p className='text-sm text-gray-600 mb-[2px]'>Room {patient.room} • Age {patient.age}</p>
                                    <p className=' text-gray-600'>{patient.condition}</p>
                                </div>
                                <ChevronRight className='w-5 h-5 text-gray-600' />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Patients;