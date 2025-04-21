import React from 'react';
import Patient from './patient';

const Patients = () => {
    const patients = [
        {
            id: "P001",
            name: "Robert Johnson",
            age: 72,
            gender: "Male",
            room: 215,
            condition: "CHF",
            bp: "160/95",
            hr: 110,
            temp: "99.1°F",
            oxygenLevel: "89%",
            mobilityStatus: "Assisted",
            status: "Critical",
            medications: ["Furosemide", "Lisinopril"],
            assignedNurse: "Nurse Olivia",
            alerts: ["High BP", "Tachycardia"],
            notes: "Requires frequent monitoring. Difficulty breathing reported.",
            lastUpdated: "2025-04-20T09:30:00Z",
            nextCheckup: "2025-04-20T11:00:00Z"
        },
        {
            id: "P002",
            name: "Maria Garcia",
            age: 54,
            gender: "Female",
            room: 305,
            condition: "Pneumonia",
            bp: "125/85",
            hr: 92,
            temp: "100.2°F",
            oxygenLevel: "94%",
            mobilityStatus: "Bed Rest",
            status: "Improving",
            medications: ["Azithromycin", "Paracetamol"],
            assignedNurse: "Nurse Ethan",
            alerts: ["Fever", "Respiratory Watch"],
            notes: "Responding well to antibiotics. Monitor temp and breathing.",
            lastUpdated: "2025-04-20T08:45:00Z",
            nextCheckup: "2025-04-20T12:00:00Z"
        },
        {
            id: "P003",
            name: "John Doe",
            age: 67,
            gender: "Male",
            room: 302,
            condition: "Diabetes Type 2",
            bp: "130/80",
            hr: 78,
            temp: "98.6°F",
            oxygenLevel: "97%",
            mobilityStatus: "Independent",
            status: "Stable",
            medications: ["Metformin"],
            assignedNurse: "Nurse Ava",
            alerts: [],
            notes: "Blood sugar under control. Routine monitoring required.",
            lastUpdated: "2025-04-20T09:00:00Z",
            nextCheckup: "2025-04-20T14:00:00Z"
        }
    ];
    return (
        <ul className='flex flex-col gap-2 mb-5'>
            {
                patients.map(patient => {
                    return (
                        <Patient patient={patient} key={patient.id} />
                    )
                })
            }
        </ul>
    );
};

export default Patients;