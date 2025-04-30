import React from 'react';
import Task from './task';

const Tasks = () => {
    const tasks = [
        {
            title: "Medication Round",
            status: "Upcoming",
            description: "Administer scheduled medications to patients in rooms 302-310",
            time: "08:00",
            duration: "1 hour"
        },
        {
            title: "Team Huddle",
            status: "Upcoming",
            description: "Daily team meeting to discuss patient status and care plans",
            time: "09:30",
            duration: "30 minutes"
        },
        {
            title: "Patient Discharge - Room 310",
            status: "Upcoming",
            description: "Complete discharge paperwork and patient education",
            time: "14:00",
            duration: "1 hour"
        },
        {
            title: "Documentation Update",
            status: "Upcoming",
            description: "Update patient charts and care documentation",
            time: "18:30",
            duration: "1 hour"
        }
    ];
    return (
        <div className="mt-5">
            <ul className='flex flex-col gap-2 mb-5'>
                {
                    tasks.map((task, index) => {
                        return (
                            <Task key={index} task={task} />
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Tasks;