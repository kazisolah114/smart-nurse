import { Clock } from 'lucide-react';
import React from 'react';
import ShiftDetailsDialog from './ShiftDetailsDialog';

const Shifts = () => {
    const upcomingShifts = [
        {
            date: "Monday, May 15",
            timeStart: "07:00",
            timeEnd: "19:00",
            shiftType: "Day Shift",
            status: "Confirmed",
            hospitalName: "St. Francis Medical Center",
            unit: "ICU",
            role: "Charge Nurse"
        },
        {
            date: "Tuesday, May 16",
            timeStart: "07:00",
            timeEnd: "19:00",
            shiftType: "Day Shift",
            status: "Confirmed",
            hospitalName: "St. Francis Medical Center",
            unit: "ICU",
            role: "Charge Nurse"
        },
        {
            date: "Wednesday, May 17",
            timeStart: "07:00",
            timeEnd: "19:00",
            shiftType: "Day Shift",
            status: "Confirmed",
            hospitalName: "St. Francis Medical Center",
            unit: "ICU",
            role: "Charge Nurse"
        },
        {
            date: "Friday, May 19",
            timeStart: "19:00",
            timeEnd: "07:00",
            shiftType: "Night Shift",
            status: "Pending",
            hospitalName: "St. Francis Medical Center",
            unit: "ER",
            role: "Float Nurse"
        },
        {
            date: "Saturday, May 20",
            timeStart: "19:00",
            timeEnd: "07:00",
            shiftType: "Night Shift",
            status: "Pending",
            hospitalName: "St. Francis Medical Center",
            unit: "ER",
            role: "Float Nurse"
        }
    ];

    return (
        <div>
            <h4 className='font-medium text-gray-900'>Upcoming Shifts</h4>
            <ul className='mt-5 space-y-3'>
                {
                    upcomingShifts.map((shift, index) => {
                        return (
                            <li key={index} className={`${shift.status === "Confirmed" ? " bg-green-500/5 border border-green-500/30" : " bg-yellow-500/5 border border-yellow-500/30"} rounded-md p-3 flex items-center justify-between`}>
                                <div className='flex items-center gap-3'>
                                    <div className={`${shift.status === "Confirmed" ? " bg-green-500/10" : " bg-yellow-500/10"} rounded-full flex items-center justify-center p-3`}><Clock className={`w-5 h-5 ${shift.status === "Confirmed" ? " text-green-500" : " text-yellow-500"}`} /></div>
                                    <div>
                                        <h6 className='font-medium flex items-center gap-3'>{shift.date}
                                            {/* <span className={`font-medium text-xs rounded-full px-2 ${shift.status === "Confirmed" ? "text-green-600 bg-green-500/10 border border-green-500/30" : "text-yellow-600 bg-yellow-500/10 border border-yellow-500/30"}`}>{shift.status}</span> */}
                                            </h6>
                                        <p className='text-gray-700'>{shift.timeStart} - {shift.timeEnd} • {shift.shiftType}</p>
                                    </div>
                                </div>
                                <ShiftDetailsDialog shift={shift} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Shifts;