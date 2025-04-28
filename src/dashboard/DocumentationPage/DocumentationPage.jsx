"use client";
import React, { useEffect, useState } from 'react';
import FeatureHeader from '@/components/common/FeatureHeader';
import Patients from './Patients';
import Documentations from './Documentations';
import axios from 'axios';

const DocumentationPage = () => {
    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);
    useEffect(() => {
        const handleFetchDocumentation = async () => {
            try {
                const response = await axios.get('/data/documentation.json');
                if(response.status === 200) {
                    setPatients(response.data.patients);
                }
            } catch (error) {
                console.log(error)
            }
        }
        handleFetchDocumentation();
    }, [])
    return (
        <div className=''>
            <FeatureHeader title={"Documentation"} description={"Manage patients notes & documentation"} />
            <div className="grid grid-cols-12 gap-5">
                <Patients patients={patients} setSelectedPatient={setSelectedPatient} />
                <Documentations selectedPatient={selectedPatient} />
            </div>
        </div>
    );
};

export default DocumentationPage;