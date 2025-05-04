import { Button } from '@/components/ui/button';
import { Download, Filter, Plus } from 'lucide-react';
import React from 'react';

const PatientActions = () => {
    return (
        <div className='flex items-center gap-2'>
            <Button className={'border bg-white hover:bg-gray-100 duration-200 cursor-pointer text-gray-700 flex items-center gap-3'}><Filter className='w-4 h-4 text-gray-700' /> Filter</Button>
            <Button className={'border bg-white hover:bg-gray-100 duration-200 cursor-pointer text-gray-700 flex items-center gap-3'}><Download className='w-4 h-4 text-gray-700' /> Export</Button>
            <Button className={'border bg-teal-600 hover:bg-teal-700 duration-200 cursor-pointer text-white flex items-center gap-3'}><Plus className='w-4 h-4 ' /> Add Patient</Button>
        </div>
    );
};

export default PatientActions;