import React from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

const PatientsFilter = () => {
    return (
        <form className='grid grid-cols-4 gap-5'>
            <div className='col-span-2 relative'>
                <Search className='w-4 h-4 text-gray-600 absolute top-[10px] left-3' />
                <Input placeholder="Search patients by name, id or diagnosis..." className={'bg-white border pl-9'} />
            </div>
            <Select defaultValue='all-status'>
                <SelectTrigger className='w-full bg-white broder'>
                    <SelectValue placeholder='Patient Status' />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='all-status'>All Status</SelectItem>
                    <SelectItem value='stable'>Stable</SelectItem>
                    <SelectItem value='improving'>Improving</SelectItem>
                    <SelectItem value='critical'>Critical</SelectItem>
                </SelectContent>
            </Select>
            <Select defaultValue='all-department'>
                <SelectTrigger className='w-full bg-white border'>
                    <SelectValue placeholder='Patient Status' />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='all-department'>All Departments</SelectItem>
                    <SelectItem value='medical'>Medical</SelectItem>
                    <SelectItem value='cardiology'>Cardiology</SelectItem>
                    <SelectItem value='surgical'>Surgical</SelectItem>
                    <SelectItem value='nurology'>Nurology</SelectItem>
                    <SelectItem value='urology'>Urology</SelectItem>
                    <SelectItem value='pulmonary'>Pulmonary</SelectItem>
                </SelectContent>
            </Select>
        </form>
    );
};

export default PatientsFilter;