import React from 'react';
import { Button } from '../ui/button';
import { CheckCircle } from 'lucide-react';

const Task = ({ task }) => {
    return (
        <li className="border rounded-md p-3 flex justify-between items-center">
            <div className="flex items-start gap-3">
                <div className={`h-3 w-3 rounded-full mt-1.5 bg-red-400`} />
                <div>
                    <div className="flex items-center gap-2">
                        <p className="font-medium">{task.title}</p>
                        <span className={`text-xs px-2 py-0.5 rounded-full bg-slate-200`}>Upcoming</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{task.description}</p>
                </div>
            </div>
            <div className="justify-end text-right">
                <p className="font-medium">{task.time}</p>
                <Button variant="outline" size="sm" className="cursor-pointer mt-1 h-7 px-2 ">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Complete
                </Button>
            </div>
        </li>
    );
};

export default Task;