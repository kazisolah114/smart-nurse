import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DotSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const PatientList = ({ patients }) => {

    return (
        <div className='border bg-white rounded-md mt-10 p-3'>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Patient</TableHead>
                        <TableHead>Room</TableHead>
                        <TableHead>Diagnosis</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Admission</TableHead>
                        <TableHead className={"text-right"}>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {patients.map(patient => {
                        return (
                            <TableRow key={patient.id}>
                                <TableCell>
                                    <div className='flex items-center gap-3'>
                                        <Avatar className={'w-10 h-10 bg-teal-600/20'}>
                                            <AvatarImage src={patient.iamge | ""} alt={patient.id} />
                                            <AvatarFallback>{patient.name.split(' ').map(item => item.slice(0, 1))}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h6 className='font-semibold text-base '>{patient.name}</h6>
                                            <p className='text-gray-700 text-sm'>{patient.id} • {patient.age} y/o • {patient.gender}</p>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>{patient.room}</TableCell>
                                <TableCell>{patient.diagnosis}</TableCell>
                                <TableCell>
                                    <span className={`border rounded-full px-2 ${patient.status == "Stable" ? 'bg-green-500/15 border-green-500/30 text-green-700' : patient.status == "Improving" ? "bg-blue-500/15 border-blue-500/30 text-blue-700" : 'bg-red-500/15 border-red-500/30 text-red-700'}`}>{patient.status}</span>
                                    </TableCell>
                                <TableCell>{patient.department}</TableCell>
                                <TableCell>{patient.admissionDate}</TableCell>
                                <TableCell className={"text-right"}>
                                    <Button variant={'ghost'}><DotSquare /></Button>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    );
};

export default PatientList;