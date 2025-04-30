import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import React from 'react';

const AddTaskDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button  className={'bg-teal-600 hover:bg-teal-700 duration-200 cursor-pointer flex items-center gap-3'}><Plus className='w-5 h-5' /> Add task</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add new Task</DialogTitle>
                    <DialogDescription>Create a new task for your schedule</DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default AddTaskDialog;