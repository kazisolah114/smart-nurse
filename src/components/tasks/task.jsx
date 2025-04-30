import React from 'react';
import { Button } from '../ui/button';
import { CheckCircle, Clock } from 'lucide-react';

const Task = ({ task }) => {
    return (
        <li className="border rounded-md p-3 flex max-sm:flex-col max-sm:gap-2 justify-between sm:items-center">
            <div className="flex items-start gap-3">
                <div className={`h-3 w-3 rounded-full mt-1.5 bg-red-400 max-sm:hidden`} />
                <div>
                    <div className="flex items-center gap-2">
                        <p className="font-medium">{task.title}</p>
                        <span className={`text-xs px-2 py-0.5 rounded-full bg-slate-200`}>{task.status}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{task.description}</p>
                </div>
            </div>
            <div className="sm:justify-end max-sm:border-t max-sm:pt-2 sm:text-right">
                <p className=" flex items-center gap-2"><Clock className='w-4 h-4' /> {task.time} • {task.duration}</p>
                <Button variant="outline" size="sm" className="cursor-pointer mt-2 h-7 px-2 ">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Complete
                </Button>
            </div>
        </li>
    );
};

export default Task;