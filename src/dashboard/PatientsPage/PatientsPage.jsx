import React from 'react';
import FeatureHeader from '@/components/common/FeatureHeader';
import PatientActions from './PatientActions';
import PatientsFilter from './PatientsFilter';

const PatientsPage = () => {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <FeatureHeader title={"Patients"} description={"Manage and view patient information"} />
                <PatientActions />
            </div>
            <PatientsFilter />
        </div>
    );
};

export default PatientsPage;