"use client";
import React, { useEffect, useState } from 'react';
import FeatureHeader from '@/components/common/FeatureHeader';
import PatientActions from './PatientActions';
import PatientsFilter from './PatientsFilter';
import PatientList from './PatientList';
import axios from 'axios';
import PatientsUpdate from './PatientsUpdate';

const PatientsPage = () => {
    const [patients, setPatients] = useState([]);
    useEffect(() => {
        const handleGetPatients = async () => {
            try {
                const response = await axios.get(`/data/patients.json`);
                if (response.status === 200) {
                    setPatients(response.data.patients);
                }
            } catch (error) {
                console.log(error)
            }
        }
        handleGetPatients();
    }, [])
    console.log(patients);
    return (
        <div>
            <div className='flex items-center justify-between'>
                <FeatureHeader title={"Patients"} description={"Manage and view patient information"} />
                <PatientActions />
            </div>
            <PatientsFilter />
            <PatientList patients={patients} />
            <PatientsUpdate patients={patients} />
        </div>
    );
};

export default PatientsPage;