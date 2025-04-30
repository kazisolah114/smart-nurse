import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DateActions = () => {
    return (
        <div className="flex items-center gap-4">
            <div className='flex items-center gap-2'>
                <Button variant={'outline'} className={'bg-white cursor-pointer'}><ChevronLeft className='w-5 h-5' /></Button>
                <Button variant={'outline'} className={'bg-white cursor-pointer font-medium'}>Today</Button>
                <Button variant={'outline'} className={'bg-white cursor-pointer'}><ChevronRight className='w-5 h-5' /></Button>
            </div>
            <Select>
                <SelectTrigger className={'bg-white cursor-pointer w-24 font-medium'}>
                    <SelectValue placeholder="Week" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="day">Day</SelectItem>
                    <SelectItem value="week">Week</SelectItem>
                    <SelectItem value="month">Month</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default DateActions;