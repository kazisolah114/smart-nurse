import React from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle } from 'lucide-react';

const CriticalAlerts = () => {
    const alerts = [
        {
            alert: "Abnormal Vital Signs",
            description: "Patient Robert Johnson (Room 215) has abnormal vital signs. BP: 160/95, HR: 110",
            importance: "warning"
        },
        {
            alert: "Low Oxygen Saturation",
            description: "Patient Emily Clark (Room 108) has oxygen saturation dropped to 85%",
            importance: "critical"
        },
        {
            alert: "High Temperature",
            description: "Patient David Lee (Room 309) has a high fever of 102.7°F",
            importance: "warning"
        },
        {
            alert: "Seizure Detected",
            description: "Seizure activity detected in Patient Sarah Kim (Room 412)",
            importance: "critical"
        }
    ];

    return (
        <div className='bg-white border p-4 col-span-12 md:col-span-8 rounded-md'>
            <div className='flex items-center justify-between'>
                <h3 className='flex items-center gap-3 text-lg text-gray-900 font-semibold'><span className='bg-red-600/20 text-red-600 rounded-full w-8 h-8 flex items-center justify-center'><AlertCircle className='w-4 h-4' /></span> Critical Alerts</h3>
            </div>
            <ul className='mt-5 space-y-3'>
                {
                    alerts.map((alert, index) => {
                        return (
                            <li key={index} className={`flex max-sm:flex-col max-sm:gap-2 sm:items-center justify-between rounded-md p-3 border ${alert.importance == "warning" ? "bg-yellow-400/10 border-yellow-400/40" : "bg-red-400/10 border-red-400/40"}`}>
                                <div className='flex items-start gap-3'>
                                    <AlertCircle className={`w-5 h-5 ${alert.importance == "warning" ? "text-yellow-400/90" : "text-red-400/90"} relative top-1 max-sm:hidden`} />
                                    <div>
                                        <h4 className='font-semibold max-sm:font-medium text-gray-900 mb-1'>{alert.alert}</h4>
                                        <p className='max-sm:text-sm'>{alert.description}</p>
                                    </div>
                                </div>
                                <div className='sm:text-right max-md:border-t max-md:pt-2'>
                                    <p className="text-sm mb-1">10 mins ago</p>
                                    <Button variant="outline" size="sm" className="cursor-pointer mt-1 h-7 px-2 ">
                                        <CheckCircle className="h-4 w-4 mr-1" />
                                        Complete
                                    </Button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default CriticalAlerts;